import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Movie } from './schemas/movie.schema';
import { Model } from 'mongoose';
import { SearchRequest } from '@dto/search/SearchRequest.dto';
import { mapSearchRequestForMongo } from '@app/utils/mongo-search.utils';
import { CreateMovieRequestDto } from '@dto/movie/Requests/create-movie-request.dto';
import { UpdateMovieRequestDto } from '@dto/movie/Requests/update-movie-request.dto';
import { MovieResponseDto } from '@dto/movie/Responses/movie-response.dto';

@Injectable()
export class MovieRepository {
  constructor(
    @InjectModel(Movie.name)
    private movieModel: Model<Movie>,
  ) {}

  async create(movie: CreateMovieRequestDto): Promise<MovieResponseDto> {
    const savedMovie = new this.movieModel(movie);
    await savedMovie.save();
    return new MovieResponseDto(savedMovie.toObject());
  }

  async findAll(limit?: number, offset?: number): Promise<MovieResponseDto[]> {
    const selector: SearchRequest = { limit: limit, offset: offset };
    const { filterQuery, queryOptions } = mapSearchRequestForMongo(selector);

    return (
      await this.movieModel.find(filterQuery, null, queryOptions).lean().exec()
    ).map((item) => new MovieResponseDto(item));
  }

  async update(
    id: string,
    movie: UpdateMovieRequestDto,
  ): Promise<MovieResponseDto> {
    const updatedMovie = await this.movieModel
      .findByIdAndUpdate(id, movie, { new: true })
      .lean()
      .exec();
    return new MovieResponseDto(updatedMovie);
  }

  async delete(id: string): Promise<MovieResponseDto> {
    const deletedMovie = await this.movieModel
      .findByIdAndRemove(id)
      .lean()
      .exec();
    return new MovieResponseDto(deletedMovie);
  }

  async search(selector: SearchRequest): Promise<MovieResponseDto[]> {
    const { filterQuery, queryOptions } = mapSearchRequestForMongo(selector);

    return (
      await this.movieModel.find(filterQuery, null, queryOptions).lean().exec()
    ).map((item) => new MovieResponseDto(item));
  }
}
