import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PhotoDocument = Photo & Document;

@Schema()
export class Photo {
  @Prop()
  description: string;
}

export const PhotoSchema = SchemaFactory.createForClass(Photo);
