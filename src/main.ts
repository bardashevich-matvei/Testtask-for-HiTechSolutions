import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createDefaultGenres } from 'migrations/genres';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  createDefaultGenres();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
