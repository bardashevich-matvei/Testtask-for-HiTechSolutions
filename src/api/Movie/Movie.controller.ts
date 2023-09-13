import { Controller, Get, Req, Post, Body, Param, Delete } from '@nestjs/common';
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
		return this.movieService.create(movie);
	}

    @Post(':id')
	async update(
		@Body() movie: Movie,
        @Param() id: string
	): Promise<Movie> {
		return this.movieService.update(id, movie);
	}

    @Get()
	async find(): Promise<Movie[]> {
		return this.movieService.findAll();
	}

	@Delete(':id')
	async delete(@Param('id') id: string): Promise<Movie> {
		return this.movieService.delete(id);
	}

	@Post('/search')
	async search(
		@Body() selector: any
	): Promise<Movie[]> {
		return this.movieService.find(selector);
	}
}