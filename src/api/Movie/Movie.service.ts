import { Injectable } from '@nestjs/common';
import { Movie } from './schemas/movie.schema';
import { MovieRepository } from './movie.repository';
import { GenreRepository } from '../Genre/genre.repository';
import { SearchRequest } from '@dto/search/searchRequst.dto';

@Injectable()
export class MovieService {
	constructor(
		private readonly movieRepository: MovieRepository,
		private readonly genreRepository: GenreRepository
	) {}
	

	async create(movie: Movie): Promise<Movie> {
		try {
			const genres = (await this.genreRepository.findAll()).map((item) => item.name);
			movie.genres.forEach((item) => {
				if (!genres.includes(item)) {
					throw(`bad request! genre ${item} does not exist!`)
				}
			})
			return this.movieRepository.create(movie);
		} catch (error) {
			throw(error);
		}
	}

	async findAll(limit?: number, offset?: number): Promise<Movie[]> {
		return this.movieRepository.findAll(limit, offset);
	}

	async update(id: string, movie: Movie): Promise<Movie> {
		try {
			if (movie.genres.length) {
				const genres = (await this.genreRepository.findAll()).map((item) => item.name);
				movie.genres.forEach((item) => {
					if (!genres.includes(item)) {
						throw(`bad request! genre ${item} does not exist!`)
					}
				})
			}
			return this.movieRepository.update(id, movie);
		} catch (error) {
			throw(error);
		}
	}

	async delete(id: string): Promise<Movie> {
		return this.movieRepository.delete(id);
	}

	async search(selector: SearchRequest): Promise<Movie[]> {
		return this.movieRepository.search(selector);
	}
}