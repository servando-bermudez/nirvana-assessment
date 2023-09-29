import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const CORS_ALLOWED_ORIGINS = process.env?.CORS_ALLOWED_ORIGINS || 'localhost';
  const allowedOrigins = CORS_ALLOWED_ORIGINS.split(' ').map(
    (url) => new RegExp(url),
  );

  app.enableCors({ origin: allowedOrigins, credentials: true });

  await app.listen(process.env.PORT || 8000);
}
bootstrap();
