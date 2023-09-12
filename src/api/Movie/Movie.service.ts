import { Injectable } from '@nestjs/common';
import { Movie } from './schemas/movie.schema';
import { MovieRepository } from './movie.repository';

@Injectable()
export class MovieService {
	constructor(private readonly movieRepository: MovieRepository
	) {}
	

	async create(movie: Movie): Promise<Movie> {
		return this.movieRepository.create(movie);
	}

	async findOne(selector: Movie): Promise<Movie> {
		return this.movieRepository.findOne(selector);
	}
}