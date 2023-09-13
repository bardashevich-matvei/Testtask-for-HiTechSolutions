import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createDefaultGenres } from 'migrations/genres';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  createDefaultGenres();
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
