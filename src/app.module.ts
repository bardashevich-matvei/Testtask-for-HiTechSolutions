import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MovieModule } from './api/Movie/Movie.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/Testtask'),
    MovieModule,
  ],
  providers: [],
})
export class AppModule {}
