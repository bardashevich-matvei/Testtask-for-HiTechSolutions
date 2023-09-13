import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { Genre } from './schemas/genre.schema';
import { GenreService } from './genre.service';

@Controller('genres')
export class GenreController {
	constructor(
		private readonly genreService: GenreService
	) {}

	@Post()
	async create(
		@Body() genre: Genre
	): Promise<Genre> {
		return this.genreService.create(genre);
	}

    @Get()
	async find(): Promise<Genre[]> {
		return this.genreService.findAll();
	}

	@Delete(':id')
	async delete(@Param('id') id: string): Promise<Genre> {
		return this.genreService.delete(id);
	}
}