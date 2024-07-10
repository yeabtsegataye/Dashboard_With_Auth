import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'tati',
    password: '123',
    database: 'Dashboard',
    entities: [
     User
    ],
    synchronize: false,
  }),UsersModule, AuthModule, ],
  controllers: [],
  providers: [],
  exports:[]
})
export class AppModule {}
