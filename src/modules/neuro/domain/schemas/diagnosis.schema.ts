import { Patient } from '@app/users/domain/schemas/patient.schema';
import { Therapist } from '@app/users/domain/schemas/therapist.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, SchemaTypes, Types } from 'mongoose';
import { Disorder } from './disorder.schema';

export type DiagnosisDocument = Diagnosis & Document;

@Schema()
export class Diagnosis {
  @ApiProperty({ type: String })
  @Prop({ type: SchemaTypes.ObjectId })
  _id?: Types.ObjectId;

  @ApiProperty()
  @Prop({ type: SchemaTypes.ObjectId, ref: Patient.name })
  patient_id?: Types.ObjectId;

  @ApiProperty()
  @Prop({ type: SchemaTypes.ObjectId, ref: Therapist.name })
  therapist_id?: Types.ObjectId;

  @ApiProperty()
  @Prop({ type: SchemaTypes.ObjectId, ref: Disorder.name })
  disorder_id?: Types.ObjectId;

  @ApiProperty()
  @Prop({ type: Date })
  date?: Date;
}

export const DiagnosisSchema = SchemaFactory.createForClass(Diagnosis);
