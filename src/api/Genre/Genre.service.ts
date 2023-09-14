import { Injectable } from '@nestjs/common';
import { Genre } from './schemas/genre.schema';
import { GenreRepository } from './genre.repository';
import { CreateGenreRequestDto } from '@dto/genre/Requests/create-genre-request.dto';
import { GenreResponseDto } from '@dto/genre/Responses/genre-response.dto';

@Injectable()
export class GenreService {
	constructor(private readonly genreRepository: GenreRepository
	) {}

	async create(genre: CreateGenreRequestDto): Promise<GenreResponseDto> {
		return this.genreRepository.create(genre);
	}

	async findAll(): Promise<GenreResponseDto[]> {
		return this.genreRepository.findAll();
	}

	async delete(id: string): Promise<GenreResponseDto> {
		return this.genreRepository.delete(id);
	}
}