import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createDefaultGenres } from 'migrations/genres';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './utils/error-handler.utils';
import { MongoExceptionFilter } from './utils/mongo-handler.utils';

async function bootstrap() {
  await createDefaultGenres();
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );
  app.useGlobalFilters(new HttpExceptionFilter(), new MongoExceptionFilter());
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
