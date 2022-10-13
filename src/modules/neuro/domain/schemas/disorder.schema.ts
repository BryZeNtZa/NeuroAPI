import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, SchemaTypes, Types } from 'mongoose';

export type DisorderDocument = Disorder & Document;

@Schema()
export class Disorder {
  @ApiProperty({ type: String })
  @Prop({ type: SchemaTypes.ObjectId })
  _id?: Types.ObjectId;

  @ApiProperty()
  @Prop({ type: SchemaTypes.ObjectId, ref: Disorder.name })
  parent_id?: Types.ObjectId;

  @ApiProperty()
  @Prop()
  name: string;
}

export const DisorderSchema = SchemaFactory.createForClass(Disorder);
