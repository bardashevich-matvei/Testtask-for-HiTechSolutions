import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Genre } from 'src/api/Genre/schemas/genre.schema';

export type MovieDocument = Movie & Document;

@Schema()
export class Movie {
  @Prop({
    unique: true
  })
  title: string;

  @Prop()
  description: string;

  @Prop()
  releaseDate: Date;

  @Prop()
  Genre: Array<Genre>;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);