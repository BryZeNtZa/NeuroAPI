import { IsEnum, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Timeslot } from '../types/timeslot.enum';
import { AppointmentStatus } from '../types/appointment-status.enum';
import { Types } from 'mongoose';
export class CreateAppointmentDto {
  @ApiProperty({
    description: 'Date of the appointment',
    type: Date,
    required: false,
  })
  @IsString()
  date?: Date;

  @ApiProperty({
    description: 'Therapist of the appointment',
    required: true,
    type: String,
  })
  therapist_id: Types.ObjectId;

  @ApiProperty({
    description: 'Timeslot of the appointment',
    enum: Timeslot,
    enumName: 'Timeslot',
    required: true,
    default: Timeslot.Morning,
  })
  @IsEnum(Timeslot)
  timeslot?: Timeslot;

  @ApiProperty({
    description: 'Appointment status',
    enum: AppointmentStatus,
    enumName: 'Status',
    isArray: false,
    required: false,
    default: AppointmentStatus.Pending,
  })
  status?: AppointmentStatus;

  @ApiProperty({
    description: 'Date of the appointment',
    type: String,
    required: false,
  })
  start?: Date;

  @ApiProperty()
  end?: Date;

  @ApiProperty({
    description: 'Next appointment',
    required: false,
  })
  next_id?: Types.ObjectId;

  @ApiProperty({
    description: 'Previous appointment',
    required: false,
  })
  previous_id?: Types.ObjectId;

  @ApiProperty()
  note_id?: Types.ObjectId;

  @ApiProperty()
  note?: string;
}
