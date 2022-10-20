/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document, Types } from 'mongoose';
import { AppointmentStatus } from '../types/appointment-status.enum';
import { Timeslot } from '../types/timeslot.enum';
export declare type AppointmentDocument = Appointment & Document;
export declare class Appointment {
    _id?: Types.ObjectId;
    date?: Date;
    timeslot?: Timeslot;
    patient_id?: Types.ObjectId;
    therapist_id: Types.ObjectId;
    status?: AppointmentStatus;
    start?: Date;
    end?: Date;
    next_id?: Types.ObjectId;
    previous_id?: Types.ObjectId;
    note_id?: Types.ObjectId;
}
export declare const AppointmentSchema: import("mongoose").Schema<Appointment, import("mongoose").Model<Appointment, any, any, any, any>, {}, {}, {}, {}, "type", Appointment>;
