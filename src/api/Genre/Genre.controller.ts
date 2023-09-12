import { Controller, Post, Body } from '@nestjs/common';
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
		return await this.genreService.create(genre);
	}
}