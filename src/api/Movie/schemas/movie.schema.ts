import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
  Genre: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);