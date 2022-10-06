import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, SchemaTypes, Types } from 'mongoose';

export type NoteDocument = Note & Document;

@Schema()
export class Note {
  @ApiProperty({ type: String })
  @Prop({ type: SchemaTypes.ObjectId })
  _id: Types.ObjectId;

  @ApiProperty()
  @Prop()
  data: string;

  @ApiProperty()
  @Prop()
  date: Date;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
