import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createDefaultGenres } from 'migrations/genres';

async function bootstrap() {
  createDefaultGenres();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
