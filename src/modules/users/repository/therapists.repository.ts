import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import {
  Therapist,
  TherapistDocument,
} from '../domain/schemas/therapist.schema';

@Injectable()
export class TherapistsRepository {
  constructor(
    @InjectModel(Therapist.name) private model: Model<TherapistDocument>,
  ) {}

  async findOne(userFilterQuery: FilterQuery<Therapist>): Promise<Therapist> {
    return this.model.findOne(userFilterQuery);
  }

  async find(usersFilterQuery: FilterQuery<Therapist>): Promise<Therapist[]> {
    return this.model.find(usersFilterQuery);
  }

  async create(user: Therapist): Promise<Therapist> {
    const newUser = new this.model(user);
    return newUser.save();
  }

  async findOneAndUpdate(
    userFilterQuery: FilterQuery<Therapist>,
    user: Partial<Therapist>,
  ): Promise<Therapist> {
    return this.model.findOneAndUpdate(userFilterQuery, user, {
      new: true,
    });
  }

  async update(id: string, user: Partial<Therapist>): Promise<Therapist> {
    return await this.model.findByIdAndUpdate(id, user).exec();
  }

  async delete(id: string): Promise<Therapist> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
