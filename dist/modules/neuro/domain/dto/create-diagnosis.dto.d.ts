import { Types } from 'mongoose';
export declare class CreateDiagnosisDto {
    patient_id?: Types.ObjectId;
    therapist_id?: Types.ObjectId;
    disorder_id?: Types.ObjectId;
    date?: Date;
}
