import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Disorder, DisorderDocument } from '../domain/schemas/disorder.schema';

@Injectable()
export class DisordersRepository {
  constructor(
    @InjectModel(Disorder.name) private model: Model<DisorderDocument>,
  ) {}

  async findOne(disorderFilterQuery: FilterQuery<Disorder>): Promise<Disorder> {
    return this.model.findOne(disorderFilterQuery);
  }

  async find(disordersFilterQuery: FilterQuery<Disorder>): Promise<Disorder[]> {
    return this.model.find(disordersFilterQuery);
  }

  async create(disorder: Disorder): Promise<Disorder> {
    const newUser = new this.model(disorder);
    return newUser.save();
  }

  async findOneAndUpdate(
    disorderFilterQuery: FilterQuery<Disorder>,
    disorder: Partial<Disorder>,
  ): Promise<Disorder> {
    return this.model.findOneAndUpdate(disorderFilterQuery, disorder, {
      new: true,
    });
  }

  async update(id: string, disorder: Partial<Disorder>): Promise<Disorder> {
    return await this.model.findByIdAndUpdate(id, disorder).exec();
  }

  async delete(id: string): Promise<Disorder> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
