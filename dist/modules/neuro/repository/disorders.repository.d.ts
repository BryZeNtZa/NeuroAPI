import { FilterQuery, Model } from 'mongoose';
import { Disorder, DisorderDocument } from '../domain/schemas/disorder.schema';
export declare class DisordersRepository {
    private model;
    constructor(model: Model<DisorderDocument>);
    findOne(disorderFilterQuery: FilterQuery<Disorder>): Promise<Disorder>;
    find(disordersFilterQuery: FilterQuery<Disorder>): Promise<Disorder[]>;
    create(disorder: Disorder): Promise<Disorder>;
    findOneAndUpdate(disorderFilterQuery: FilterQuery<Disorder>, disorder: Partial<Disorder>): Promise<Disorder>;
    update(id: string, disorder: Partial<Disorder>): Promise<Disorder>;
    delete(id: string): Promise<Disorder>;
}
