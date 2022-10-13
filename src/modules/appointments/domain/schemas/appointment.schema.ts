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
  _id?: Types.ObjectId;

  @ApiProperty({
    description: 'Appointment db record date',
    required: true,
  })
  @Prop({ default: Date.now() })
  date?: Date;

  @ApiProperty({
    description: 'Appointment time slot',
    enum: Timeslot,
    enumName: 'Timeslot',
    isArray: false,
    required: false,
    default: Timeslot.Morning,
  })
  @Prop()
  timeslot?: Timeslot;

  @ApiProperty()
  @Prop({ type: SchemaTypes.ObjectId, ref: Patient.name })
  patient_id?: Types.ObjectId;

  @ApiProperty({
    description: 'Therapist of the appointment',
    required: true,
  })
  @Prop({ type: SchemaTypes.ObjectId, ref: Therapist.name })
  therapist_id: Types.ObjectId;

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

  @ApiProperty({
    description: 'Starting time of the appointment ISO',
    required: true,
  })
  @Prop()
  start?: Date;

  @ApiProperty({
    description: 'Ending time of the appointment ISO',
    required: true,
  })
  @Prop()
  end?: Date;

  @ApiProperty({
    description: 'Next appointment id',
    required: false,
  })
  @Prop({ type: SchemaTypes.ObjectId, ref: Appointment.name, default: null })
  next_id?: Types.ObjectId;

  @ApiProperty({
    description: 'Past appointment',
    required: false,
  })
  @Prop({ type: SchemaTypes.ObjectId, ref: Appointment.name, default: null })
  previous_id?: Types.ObjectId;

  @ApiProperty({
    description: 'Appointment note',
    required: false,
    default: null,
  })
  @Prop({ type: SchemaTypes.ObjectId, ref: Note.name })
  note_id?: Types.ObjectId;
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);
