import { Controller, Post, Body, Get, Delete, Param, SerializeOptions } from '@nestjs/common';
import { GenreService } from './genre.service';
import { CreateGenreRequestDto } from '@dto/genre/Requests/create-genre-request.dto';
import { GenreResponseDto } from '@dto/genre/Responses/genre-response.dto';

@Controller('api/genres')
@SerializeOptions({ excludeExtraneousValues: true })
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Post()
  async create(
    @Body() genre: CreateGenreRequestDto,
  ): Promise<GenreResponseDto> {
    return this.genreService.create(genre);
  }

  @Get()
  async find(): Promise<GenreResponseDto[]> {
    return this.genreService.findAll();
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<GenreResponseDto> {
    return this.genreService.delete(id);
  }
}
