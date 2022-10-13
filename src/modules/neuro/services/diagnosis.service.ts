import { Injectable } from '@nestjs/common';

import { CreateDiagnosisDto } from '../domain/dto/create-diagnosis.dto';
import { UpdateDiagnosisDto } from '../domain/dto/update-diagnosis.dto';

import { Diagnosis } from '../domain/schemas/diagnosis.schema';
import { DiagnosisRepository } from '../repository/diagnosis.repository';

@Injectable()
export class DiagnosisService {
  constructor(private readonly repo: DiagnosisRepository) {}

  async getById(id: string): Promise<Diagnosis> {
    return this.repo.findOne({ id });
  }

  async getList(page: number): Promise<Diagnosis[]> {
    console.log(page);
    return this.repo.find({});
  }

  async create(dto: CreateDiagnosisDto): Promise<Diagnosis> {
    return this.repo.create(dto);
  }

  async update(id: string, dto: UpdateDiagnosisDto): Promise<Diagnosis> {
    return this.repo.findOneAndUpdate({ _id: id }, dto);
  }

  async delete(id: string): Promise<Diagnosis> {
    return this.repo.delete(id);
  }
}
