import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, SchemaTypes, Types } from 'mongoose';

export type IntakeFormDocument = IntakeForm & Document;

@Schema()
export class IntakeForm {
  @ApiProperty({ type: String })
  @Prop({ type: SchemaTypes.ObjectId })
  _id: Types.ObjectId;

  @ApiProperty()
  @Prop()
  form: string;
}

export const IntakeFormSchema = SchemaFactory.createForClass(IntakeForm);
