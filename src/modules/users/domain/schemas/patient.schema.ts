import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, SchemaTypes, Types } from 'mongoose';
import { User } from './user.schema';

export type PatientDocument = Patient & Document;

@Schema()
export class Patient {
  @ApiProperty({ type: String })
  @Prop({ type: SchemaTypes.ObjectId })
  _id?: Types.ObjectId;

  @ApiProperty()
  @Prop({ type: SchemaTypes.ObjectId, ref: User.name, unique: true })
  user_id?: Types.ObjectId;

  @ApiProperty({ type: Number })
  @Prop({ type: Number })
  age: number;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
