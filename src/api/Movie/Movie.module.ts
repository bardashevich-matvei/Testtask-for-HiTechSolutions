import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Movie, MovieSchema } from './schemas/movie.schema';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { MovieRepository } from './movie.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }])],
  controllers: [MovieController],
  providers: [MovieService, MovieRepository],
})
export class MovieModule {}