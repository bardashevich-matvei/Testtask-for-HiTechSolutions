import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Movie, MovieSchema } from './schemas/movie.schema';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { MovieRepository } from './movie.repository';
import { GenreRepository } from '../Genre/genre.repository';
import { Genre, GenreSchema } from '../Genre/schemas/genre.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Movie.name, schema: MovieSchema },
      { name: Genre.name, schema: GenreSchema },
    ]),
  ],
  controllers: [MovieController],
  providers: [MovieService, MovieRepository, GenreRepository],
})
export class MovieModule {}
