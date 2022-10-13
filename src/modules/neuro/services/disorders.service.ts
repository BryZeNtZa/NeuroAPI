import { Injectable } from '@nestjs/common';

import { CreateDisorderDto } from '../domain/dto/create-disorder.dto';
import { UpdateDisorderDto } from '../domain/dto/update-disorder.dto';

import { Disorder } from '../domain/schemas/disorder.schema';
import { DisordersRepository } from '../repository/disorders.repository';

@Injectable()
export class DisordersService {
  constructor(private readonly repo: DisordersRepository) {}

  async getById(id: string): Promise<Disorder> {
    return this.repo.findOne({ id });
  }

  async getList(page: number): Promise<Disorder[]> {
    console.log(page);
    return this.repo.find({});
  }

  async create(dto: CreateDisorderDto): Promise<Disorder> {
    return this.repo.create(dto);
  }

  async update(id: string, dto: UpdateDisorderDto): Promise<Disorder> {
    return this.repo.findOneAndUpdate({ _id: id }, dto);
  }

  async delete(id: string): Promise<Disorder> {
    return this.repo.delete(id);
  }
}
