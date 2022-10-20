import { FilterQuery, Model } from 'mongoose';
import { Diagnosis, DiagnosisDocument } from '../domain/schemas/diagnosis.schema';
export declare class DiagnosisRepository {
    private model;
    constructor(model: Model<DiagnosisDocument>);
    findOne(userFilterQuery: FilterQuery<Diagnosis>): Promise<Diagnosis>;
    find(usersFilterQuery: FilterQuery<Diagnosis>): Promise<Diagnosis[]>;
    create(user: Diagnosis): Promise<Diagnosis>;
    findOneAndUpdate(userFilterQuery: FilterQuery<Diagnosis>, user: Partial<Diagnosis>): Promise<Diagnosis>;
    update(id: string, user: Partial<Diagnosis>): Promise<Diagnosis>;
    delete(id: string): Promise<Diagnosis>;
}
