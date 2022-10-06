import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, SchemaTypes, Types } from 'mongoose';

export type AvailabilityDocument = Availability & Document;

@Schema()
export class Availability {
  @ApiProperty({ type: String })
  @Prop({ type: SchemaTypes.ObjectId })
  _id: Types.ObjectId;

  @ApiProperty()
  @Prop()
  date: Date;

  @ApiProperty()
  @Prop()
  hours?: number;
}

export const AvailabilitySchema = SchemaFactory.createForClass(Availability);
