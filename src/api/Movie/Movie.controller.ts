import { Controller, Get, Req, Post, Body, Param, Delete, Patch, Query } from '@nestjs/common';
import { Movie } from './schemas/movie.schema';
import { MovieService } from './movie.service';
import { SearchRequest } from '@dto/search/searchRequst.dto';

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

    @Patch(':id')
	async update(
		@Body() movie: Movie,
        @Param('id') id: string
	): Promise<Movie> {
		return this.movieService.update(id, movie);
	}

    @Get()
	async find(
		@Query('limit') limit?: number,
		@Query('offset') offset?: number,
	): Promise<Movie[]> {
		return this.movieService.findAll(limit, offset);
	}

	@Delete(':id')
	async delete(@Param('id') id: string): Promise<Movie> {
		return this.movieService.delete(id);
	}

	@Post('/search')
	async search(
		@Body() selector: SearchRequest
	): Promise<Movie[]> {
		return this.movieService.search(selector);
	}
}