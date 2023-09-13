import { Injectable } from '@nestjs/common';
import { Genre } from './schemas/genre.schema';
import { GenreRepository } from './genre.repository';

@Injectable()
export class GenreService {
	constructor(private readonly genreRepository: GenreRepository
	) {}

	async create(genre: Genre): Promise<Genre> {
		return this.genreRepository.create(genre);
	}

	async findAll(): Promise<Genre[]> {
		return this.genreRepository.findAll();
	}

	async delete(id: string): Promise<Genre> {
		return this.genreRepository.delete(id);
	}
}