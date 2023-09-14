import { Injectable } from '@nestjs/common';
import { MovieRepository } from './movie.repository';
import { GenreRepository } from '../Genre/genre.repository';
import { SearchRequest } from '@dto/search/SearchRequest.dto';
import { CreateMovieRequestDto } from '@dto/movie/Requests/create-movie-request.dto';
import { UpdateMovieRequestDto } from '@dto/movie/Requests/update-movie-request.dto';
import { MovieResponseDto } from '@dto/movie/Responses/movie-response.dto';
import { checkGenres } from '@app/utils/check-genres.utils';
import { Movie } from './schemas/movie.schema';
import { checkGenreDublicates } from '@app/utils/check-genres-dublicates.utils';

@Injectable()
export class MovieService {
  constructor(
    private readonly movieRepository: MovieRepository,
    private readonly genreRepository: GenreRepository,
  ) {}

  async create(movie: CreateMovieRequestDto): Promise<MovieResponseDto> {
    checkGenreDublicates(movie.genres);
    const genres = (await this.genreRepository.findAll()).map(
      (item) => item.name,
    );

    checkGenres(movie as Movie, genres);

    return this.movieRepository.create(movie);
  }

  async findAll(limit?: number, offset?: number): Promise<MovieResponseDto[]> {
    return this.movieRepository.findAll(limit, offset);
  }

  async update(
    id: string,
    movie: UpdateMovieRequestDto,
  ): Promise<MovieResponseDto> {
    checkGenreDublicates(movie.genres);
    if (movie.genres.length) {
      const genres = (await this.genreRepository.findAll()).map(
        (item) => item.name,
      );
      checkGenres(movie as Movie, genres);
    }
    return this.movieRepository.update(id, movie);
  }

  async delete(id: string): Promise<MovieResponseDto> {
    return this.movieRepository.delete(id);
  }

  async search(selector: SearchRequest): Promise<MovieResponseDto[]> {
    return this.movieRepository.search(selector);
  }
}
