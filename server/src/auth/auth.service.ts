import {
  Injectable,
  UnauthorizedException,
  Res,
  Req,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import * as CryptoJS from 'crypto-js';
import { jwtConstants } from './constants';
import { CustomRequest } from './custom-request.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async Signup(AutDTO: CreateAuthDto, @Res() res: Response) {
    const existingUser = await this.userRepository.findOne({
      where: { email: AutDTO.email },
    });

    if (existingUser) {
      return res.status(400).send('User already exists');
    } else {
      try {
        const hash = await bcrypt.hash(AutDTO.Password, 10);
        const newUser = this.userRepository.create({
          email: AutDTO.email,
          Password: hash,
          phone: AutDTO.phone,
        });
        const data = await this.userRepository.save(newUser);
        const payload = { id: data.id, email: data.email };

        const accessToken = this.jwtService.sign(payload, {
          secret: jwtConstants.Access_secret,
          expiresIn: '15m',
        });
        const refreshToken = this.jwtService.sign(payload, {
          secret: jwtConstants.Refresh_secret,
          expiresIn: '7d',
        });

        res.cookie('refresh_token', refreshToken, {
          httpOnly: true,
          secure: false, // Set to true in production
          sameSite: 'strict', // or 'lax'
        });
        return res.send({ accessToken });
      } catch (error) {
        console.error('Error hashing password:', error);
        return res.status(500).send('Error creating user');
      }
    }
  }
 /////////////////////////////////
  async Login(AutDTO: CreateAuthDto, @Res() res: Response) {
    // const SECRET_KEY = 'your-frontend-secret-key'; // Don't do this like me :)
    // const decryptData = (encryptedData: string) => {
    //   try {
    //     const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
    //     return bytes.toString(CryptoJS.enc.Utf8);
    //   } catch (error) {
    //     console.error('Error decrypting data:', error);
    //     throw new UnauthorizedException('Invalid encrypted data');
    //   }
    // };

    // const decryptedPassword = decryptData(AutDTO.Password);
    // if (!decryptedPassword) {
    //   return res.status(400).send('Invalid encrypted password');
    // }

    const data = await this.userRepository.findOne({
      where: { email: AutDTO.email },
    });
    if (!data) {
      return res.status(404).send('No user found');
    }
    const isMatch = await bcrypt.compare(AutDTO.Password, data.Password);
    if (!isMatch) {
      throw new UnauthorizedException();
    }
    const payload = { id: data.id, email: data.email };

    const accessToken = this.jwtService.sign(payload, {
      secret: jwtConstants.Access_secret,
      expiresIn: '1m',
    });
    const refreshToken = this.jwtService.sign(payload, {
      secret: jwtConstants.Refresh_secret,
      expiresIn: '2m',
    });

    res.cookie('refresh_token', refreshToken, {
      httpOnly: true,
      secure: false, // Set to true in production
      sameSite: 'strict', // or 'lax'
    });
    return res.send({ accessToken });
  }
 /////////////////////////////////
  private extractAccessToken(access_token: string) {
    if (access_token && access_token.startsWith('Bearer ')) {
      const acc = access_token.split(' ')[1];
      return acc;
    }
  }
 /////////////////////////////////
  async refreshToken(@Res() res: Response, @Req() req: CustomRequest) {
    const refreshToken = req.cookies.refresh_token;
    const access_token = req.headers.authorization;

    if (!refreshToken || !access_token) {
      throw new UnauthorizedException('No token found');
    }
    try {
      const acc = this.extractAccessToken(access_token);
      // console.log(acc, 'acc extracted')

      const ac = await this.jwtService.verifyAsync(acc, {
        secret: jwtConstants.Access_secret,
      });
      return res.send('alrady have valid access_token');
      // throw new Error( 'alrady have valid access_token')
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        try {
          const payload = await this.jwtService.verify(refreshToken, {
            secret: jwtConstants.Refresh_secret,
          });
          const { id, email } = payload;

          const accessToken = this.jwtService.sign(
            { id, email },
            {
              secret: jwtConstants.Access_secret,
              expiresIn: '50s',
            },
          );
          return res.send({ accessToken });
        } catch (error) {
          if (error.name === 'TokenExpiredError') {
            throw new UnauthorizedException(
              'Refresh token expired, please log in again',
            );
          }
          throw new UnauthorizedException('Invalid refresh token');
        }
      } else {
        throw new UnauthorizedException('Invalid access token');
      }
    }
    ///////////////////
  }
}
