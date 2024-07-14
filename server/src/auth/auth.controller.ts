import { Controller, Post, Body, Res, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { Response } from 'express';
import { CustomRequest } from './custom-request.interface';
import { Public } from './public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @Public()
  async Signup(@Body() createAuthDto: CreateAuthDto, @Res() res: Response) {
    return this.authService.Signup(createAuthDto, res);
  }

  @Post('login')
  @Public()
  async Login(@Body() createAuthDto: CreateAuthDto, @Res() res: Response) {
    return this.authService.Login(createAuthDto, res);
  }

  @Post('refresh-token')
  @Public()
  async refreshToken(@Res() res: Response, @Req() req: CustomRequest) {
    return this.authService.refreshToken(res, req);
  }

  @Post('verify-token')
 // @Public()
  async verifiToken(@Res() res: Response, @Req() req: CustomRequest) {
    return this.authService.verifiToken(res, req);
  }

  @Post('log-out')
   @Public()
   async Logout(@Res() res: Response, @Req() req: CustomRequest) {
     return this.authService.Logout(res, req);
   }
}
