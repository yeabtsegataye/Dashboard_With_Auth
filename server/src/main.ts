import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Request, Response, NextFunction } from 'express';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  // Apply CORS middleware
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true, // Allow credentials (cookies)
  });
  // Apply logging middleware
  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`Request ${req.method} ${req.path}`);
    next();
  });
  app.use(cookieParser()); // Use cookie-parser middleware

  await app.listen(8000);
}

bootstrap();