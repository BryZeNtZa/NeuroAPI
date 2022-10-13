import { Injectable } from '@nestjs/common';

import { Treatment } from '../domain/schemas/treatment.schema';
import { CreateTreatmentDto } from '../domain/dto/create-treatment.dto';
import { UpdateTreatmentDto } from '../domain/dto/update-treatment.dto';
import { TreatmentRepository } from '../repository/treatment.repository';

@Injectable()
export class TreatmentService {
  constructor(private readonly repo: TreatmentRepository) {}

  async getById(id: string): Promise<Treatment> {
    return this.repo.findOne({ id });
  }

  async getList(page: number): Promise<Treatment[]> {
    console.log(page);
    return this.repo.find({});
  }

  async create(dto: CreateTreatmentDto): Promise<Treatment> {
    return this.repo.create(dto);
  }

  async update(id: string, dto: UpdateTreatmentDto): Promise<Treatment> {
    return this.repo.findOneAndUpdate({ id }, dto);
  }

  async delete(id: string): Promise<Treatment> {
    return this.repo.delete(id);
  }
}
