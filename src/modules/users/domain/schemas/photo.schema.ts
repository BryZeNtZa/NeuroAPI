import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, SchemaTypes, Types } from 'mongoose';

export type PhotoDocument = Photo & Document;

@Schema()
export class Photo {
  @ApiProperty({ type: String })
  @Prop({ type: SchemaTypes.ObjectId })
  _id: Types.ObjectId;

  @ApiProperty()
  @Prop()
  description: string;
}

export const PhotoSchema = SchemaFactory.createForClass(Photo);
