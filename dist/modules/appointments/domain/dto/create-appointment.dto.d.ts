import { Timeslot } from '../types/timeslot.enum';
import { AppointmentStatus } from '../types/appointment-status.enum';
import { Types } from 'mongoose';
export declare class CreateAppointmentDto {
    date?: Date;
    therapist_id: Types.ObjectId;
    timeslot?: Timeslot;
    status?: AppointmentStatus;
    start?: Date;
    end?: Date;
    next_id?: Types.ObjectId;
    previous_id?: Types.ObjectId;
    note_id?: Types.ObjectId;
    note?: string;
}
