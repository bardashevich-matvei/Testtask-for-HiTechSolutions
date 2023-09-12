import { Controller, Get, Req, Post, Body } from '@nestjs/common';
import { Movie } from './schemas/movie.schema';
import { MovieService } from './movie.service';

@Controller('movies')
export class MovieController {
	constructor(
		private readonly movieService: MovieService
	) {}

	@Post()
	async create(
		@Body() movie: Movie
	): Promise<Movie> {
		return await this.movieService.create(movie);
	}
}