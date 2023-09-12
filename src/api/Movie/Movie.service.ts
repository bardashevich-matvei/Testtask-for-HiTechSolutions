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

	async findAll(): Promise<Movie[]> {
		return this.movieRepository.findAll();
	}

	async update(id: string, movie: Movie): Promise<Movie> {
		return this.movieRepository.update(id, movie);
	}

	async delete(id: string): Promise<Movie> {
		return this.movieRepository.delete(id);
	}
}