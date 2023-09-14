import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
  SerializeOptions,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { SearchRequest } from '@dto/search/SearchRequest.dto';
import { CreateMovieRequestDto } from '@dto/movie/Requests/create-movie-request.dto';
import { UpdateMovieRequestDto } from '@dto/movie/Requests/update-movie-request.dto';
import { MovieResponseDto } from '@dto/movie/Responses/movie-response.dto';

@Controller('movies')
@UseInterceptors(ClassSerializerInterceptor)
@SerializeOptions({ excludeExtraneousValues: true })
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  async create(
    @Body() movie: CreateMovieRequestDto,
  ): Promise<MovieResponseDto> {
    return this.movieService.create(movie);
  }

  @Patch(':id')
  async update(
    @Body() movie: UpdateMovieRequestDto,
    @Param('id') id: string,
  ): Promise<MovieResponseDto> {
    return this.movieService.update(id, movie);
  }

  @Get()
  async find(
    @Query('limit') limit?: number,
    @Query('offset') offset?: number,
  ): Promise<MovieResponseDto[]> {
    return this.movieService.findAll(limit, offset);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<MovieResponseDto> {
    return this.movieService.delete(id);
  }

  @Post('/search')
  async search(@Body() selector: SearchRequest): Promise<MovieResponseDto[]> {
    return this.movieService.search(selector);
  }
}
