import { FilterQuery, Model } from 'mongoose';
import { Patient, PatientDocument } from '../domain/schemas/patient.schema';
export declare class PatientsRepository {
    private model;
    constructor(model: Model<PatientDocument>);
    findOne(patientFilterQuery: FilterQuery<Patient>): Promise<Patient>;
    find(patientsFilterQuery: FilterQuery<Patient>): Promise<Patient[]>;
    create(patient: Patient): Promise<Patient>;
    findOneAndUpdate(patientFilterQuery: FilterQuery<Patient>, patient: Partial<Patient>): Promise<Patient>;
    update(id: string, patient: Partial<Patient>): Promise<Patient>;
    delete(id: string): Promise<Patient>;
}
