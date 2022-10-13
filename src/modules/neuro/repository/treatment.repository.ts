import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import {
  Treatment,
  TreatmentDocument,
} from '../domain/schemas/treatment.schema';

@Injectable()
export class TreatmentRepository {
  constructor(
    @InjectModel(Treatment.name) private model: Model<TreatmentDocument>,
  ) {}

  async findOne(
    treatmentFilterQuery: FilterQuery<Treatment>,
  ): Promise<Treatment> {
    return this.model.findOne(treatmentFilterQuery);
  }

  async find(
    treatmentsFilterQuery: FilterQuery<Treatment>,
  ): Promise<Treatment[]> {
    return this.model.find(treatmentsFilterQuery);
  }

  async create(treatment: Treatment): Promise<Treatment> {
    const newTreatment = new this.model(treatment);
    return newTreatment.save();
  }

  async findOneAndUpdate(
    treatmentFilterQuery: FilterQuery<Treatment>,
    treatment: Partial<Treatment>,
  ): Promise<Treatment> {
    return this.model.findOneAndUpdate(treatmentFilterQuery, treatment, {
      new: true,
    });
  }

  async update(id: string, treatment: Partial<Treatment>): Promise<Treatment> {
    return await this.model.findByIdAndUpdate(id, treatment).exec();
  }

  async delete(id: string): Promise<Treatment> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
