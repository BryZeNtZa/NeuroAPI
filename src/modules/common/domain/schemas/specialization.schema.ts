import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, SchemaTypes, Types } from 'mongoose';

export type SpecializationDocument = Specialization & Document;

@Schema()
export class Specialization {
  @ApiProperty({ type: String })
  @Prop({ type: SchemaTypes.ObjectId })
  _id: Types.ObjectId;

  @ApiProperty()
  @Prop()
  name: string;
}

export const SpecializationSchema =
  SchemaFactory.createForClass(Specialization);
