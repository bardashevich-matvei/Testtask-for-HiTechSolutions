import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Genre } from './schemas/genre.schema';
import { Model } from 'mongoose';
import { CreateGenreRequestDto } from '@dto/genre/Requests/create-genre-request.dto';
import { GenreResponseDto } from '@dto/genre/Responses/genre-response.dto';

@Injectable()
export class GenreRepository {
  constructor(
    @InjectModel(Genre.name)
    private genreModel: Model<Genre>,
  ) {}

  async create(genre: CreateGenreRequestDto): Promise<GenreResponseDto> {
    const savedGenre = new this.genreModel(genre);
    return new GenreResponseDto(await savedGenre.save());
  }

  async findAll(): Promise<GenreResponseDto[]> {
    return (await this.genreModel.find().lean().exec()).map((item) => new GenreResponseDto(item));
  }

  async delete(id: string): Promise<GenreResponseDto> {
    const updatedGenre = await this.genreModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return new GenreResponseDto(updatedGenre);
  }
}
