import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type GenreDocument = Genre & Document;

@Schema()
export class Genre {
  @Prop({
    type: String,
    default: function genUUID() {
      return uuidv4();
    }
  })
  _id: string;

  @Prop({
    unique: true
  })
  name: string;
}

export const GenreSchema = SchemaFactory.createForClass(Genre);