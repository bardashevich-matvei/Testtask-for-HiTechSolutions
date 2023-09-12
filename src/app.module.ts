import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MovieController } from './api/Movie/Movie.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/Testtask'),
    MovieController
  ],
  providers: [],
})
export class AppModule {}
