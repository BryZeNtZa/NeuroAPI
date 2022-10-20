import { Types } from 'mongoose';
export declare class CreateTreatmentDto {
    parent_id?: Types.ObjectId;
    therapist_id?: Types.ObjectId;
    name?: string;
    note_id?: Types.ObjectId;
    note?: string;
}
