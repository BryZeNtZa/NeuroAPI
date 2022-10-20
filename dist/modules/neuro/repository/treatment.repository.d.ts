import { FilterQuery, Model } from 'mongoose';
import { Treatment, TreatmentDocument } from '../domain/schemas/treatment.schema';
export declare class TreatmentRepository {
    private model;
    constructor(model: Model<TreatmentDocument>);
    findOne(treatmentFilterQuery: FilterQuery<Treatment>): Promise<Treatment>;
    find(treatmentsFilterQuery: FilterQuery<Treatment>): Promise<Treatment[]>;
    create(treatment: Treatment): Promise<Treatment>;
    findOneAndUpdate(treatmentFilterQuery: FilterQuery<Treatment>, treatment: Partial<Treatment>): Promise<Treatment>;
    update(id: string, treatment: Partial<Treatment>): Promise<Treatment>;
    delete(id: string): Promise<Treatment>;
}
