import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type MovieDocument = Movie & Document;

@Schema()
export class Movie {
  @Prop({
    type: String,
    default: function genUUID() {
      return uuidv4();
    },
  })
  _id: string;

  @Prop({
    unique: true,
    require: true,
  })
  title: string;

  @Prop({
    require: true,
  })
  description: string;

  @Prop({
    require: true,
  })
  releaseDate: Date;

  @Prop({
    require: true,
  })
  genres: Array<string>;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
