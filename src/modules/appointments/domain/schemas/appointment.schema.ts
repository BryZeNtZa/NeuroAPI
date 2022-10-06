import { Patient } from '@app/users/domain/schemas/patient.schema';
import { Therapist } from '@app/users/domain/schemas/therapist.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, SchemaTypes, Types } from 'mongoose';
import { Note } from 'src/modules/common/domain/schemas/note.schema';
import { AppointmentStatus } from '../types/appointment-status.enum';
import { Timeslot } from '../types/timeslot.enum';

export type AppointmentDocument = Appointment & Document;

@Schema()
export class Appointment {
  @ApiProperty({ type: String })
  @Prop({ type: SchemaTypes.ObjectId })
  _id: Types.ObjectId;

  @ApiProperty()
  @Prop()
  date: Date;

  @ApiProperty({
    description: 'Appointment time slot',
    enum: Timeslot,
    enumName: 'Timeslot',
    isArray: false,
    required: false,
    default: [Timeslot.Morning],
  })
  @Prop()
  timeslot?: Timeslot;

  @ApiProperty()
  @Prop({ type: SchemaTypes.ObjectId, ref: Patient.name })
  patient_id?: string;

  @ApiProperty()
  @Prop({ type: SchemaTypes.ObjectId, ref: Therapist.name })
  therapist_id: string;

  @ApiProperty({
    description: 'Appointment status',
    enum: AppointmentStatus,
    enumName: 'Status',
    isArray: false,
    required: false,
    default: AppointmentStatus.Pending,
  })
  @Prop({ default: AppointmentStatus.Pending })
  status?: AppointmentStatus;

  @ApiProperty()
  @Prop()
  start_time?: string;

  @ApiProperty()
  @Prop({ index: true, unique: true })
  end_time?: string;

  @ApiProperty({
    description: 'Future appointment',
    required: false,
  })
  @Prop()
  future_appt?: string;

  @ApiProperty({
    description: 'Past appointment',
    required: false,
  })
  @Prop({ default: null })
  past_appt?: string;

  @ApiProperty()
  @Prop({ type: SchemaTypes.ObjectId, ref: Note.name })
  note_id?: string;
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);
