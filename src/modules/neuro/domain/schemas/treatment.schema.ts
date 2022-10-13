import { Note } from '@app/common/domain/schemas/note.schema';
import { Patient } from '@app/users/domain/schemas/patient.schema';
import { Therapist } from '@app/users/domain/schemas/therapist.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, SchemaTypes, Types } from 'mongoose';
import { Disorder } from './disorder.schema';

export type TreatmentDocument = Treatment & Document;

@Schema()
export class Treatment {
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
  @Prop({ type: SchemaTypes.ObjectId, ref: Note.name })
  note_id?: Types.ObjectId;

  @ApiProperty()
  @Prop({ type: String })
  name?: string;

  @ApiProperty()
  @Prop({ type: Date })
  date?: Date;
}

export const TreatmentSchema = SchemaFactory.createForClass(Treatment);
