import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import {
  Diagnosis,
  DiagnosisDocument,
} from '../domain/schemas/diagnosis.schema';

@Injectable()
export class DiagnosisRepository {
  constructor(
    @InjectModel(Diagnosis.name) private model: Model<DiagnosisDocument>,
  ) {}

  async findOne(userFilterQuery: FilterQuery<Diagnosis>): Promise<Diagnosis> {
    return this.model.findOne(userFilterQuery);
  }

  async find(usersFilterQuery: FilterQuery<Diagnosis>): Promise<Diagnosis[]> {
    return this.model.find(usersFilterQuery);
  }

  async create(user: Diagnosis): Promise<Diagnosis> {
    const newUser = new this.model(user);
    return newUser.save();
  }

  async findOneAndUpdate(
    userFilterQuery: FilterQuery<Diagnosis>,
    user: Partial<Diagnosis>,
  ): Promise<Diagnosis> {
    return this.model.findOneAndUpdate(userFilterQuery, user, {
      new: true,
    });
  }

  async update(id: string, user: Partial<Diagnosis>): Promise<Diagnosis> {
    return await this.model.findByIdAndUpdate(id, user).exec();
  }

  async delete(id: string): Promise<Diagnosis> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
