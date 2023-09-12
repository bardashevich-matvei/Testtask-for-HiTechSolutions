import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Genre, GenreSchema } from './schemas/genre.schema';
import { GenreController } from './genre.controller';
import { GenreService } from './genre.service';
import { GenreRepository } from './genre.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Genre.name, schema: GenreSchema }])],
  controllers: [GenreController],
  providers: [GenreService, GenreRepository],
})
export class GenreModule {}