import { FilterQuery, Model } from 'mongoose';
import { Therapist, TherapistDocument } from '../domain/schemas/therapist.schema';
export declare class TherapistsRepository {
    private model;
    constructor(model: Model<TherapistDocument>);
    findOne(userFilterQuery: FilterQuery<Therapist>): Promise<Therapist>;
    find(usersFilterQuery: FilterQuery<Therapist>): Promise<Therapist[]>;
    create(user: Therapist): Promise<Therapist>;
    findOneAndUpdate(userFilterQuery: FilterQuery<Therapist>, user: Partial<Therapist>): Promise<Therapist>;
    update(id: string, user: Partial<Therapist>): Promise<Therapist>;
    delete(id: string): Promise<Therapist>;
}
