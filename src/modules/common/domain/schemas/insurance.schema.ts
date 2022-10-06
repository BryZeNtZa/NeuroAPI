import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, SchemaTypes, Types } from 'mongoose';

export type InsuranceDocument = Insurance & Document;

@Schema()
export class Insurance {
  @ApiProperty({ type: String })
  @Prop({ type: SchemaTypes.ObjectId })
  _id: Types.ObjectId;

  @ApiProperty()
  @Prop()
  form: string;
}

export const InsuranceSchema = SchemaFactory.createForClass(Insurance);
