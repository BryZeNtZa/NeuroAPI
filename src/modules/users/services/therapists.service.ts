import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { CreateUserDto } from '../domain/dto/create-user.dto';
import { CreateTherapistDto } from '../domain/dto/create-therapist.dto';
import { UpdateUserDto } from '../domain/dto/update-user.dto';

import { Therapist } from '../domain/schemas/therapist.schema';
import { UsersRepository } from '../repository/users.repository';
import { TherapistsRepository } from '../repository/therapists.repository';
import { UpdateTherapistDto } from '../domain/dto/update-therapist.dto';

@Injectable()
export class TherapistsService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly therapistsRepository: TherapistsRepository,
    @InjectConnection() private readonly connection: mongoose.Connection,
  ) {}

  async getById(id: string): Promise<Therapist> {
    return this.therapistsRepository.findOne({ id });
  }

  async getByUserId(id: string): Promise<Therapist> {
    return this.therapistsRepository.findOne({ user_id: id });
  }

  async getTherapists(page: number): Promise<Therapist[]> {
    console.log(page);
    return this.therapistsRepository.find({});
  }

  async create(dto: CreateTherapistDto): Promise<Therapist> {
    const session = await this.connection.startSession();
    session.startTransaction();
    try {
      const userCreateDto = <CreateUserDto>dto;
      await this.usersRepository.create(userCreateDto);
      const therapist = this.therapistsRepository.create(dto);
      await session.commitTransaction();
      return therapist;
    } catch (e) {
      await session.abortTransaction();
      throw e;
    } finally {
      session.endSession();
    }
  }

  async update(id: string, dto: UpdateTherapistDto): Promise<Therapist> {
    const userUpdateDto = <UpdateUserDto>dto;
    const session = await this.connection.startSession();
    session.startTransaction();
    try {
      await this.usersRepository.update(dto.user_id, userUpdateDto);
      return this.therapistsRepository.update(id, dto);
    } catch (e) {
      await session.abortTransaction();
      throw e;
    } finally {
      session.endSession();
    }
  }

  async delete(id: string): Promise<Therapist> {
    const session = await this.connection.startSession();
    session.startTransaction();
    try {
      const therapist = await this.therapistsRepository.findOne({ _id: id });
      if (!therapist) {
        throw new Error('Therapist not found !');
      }
      this.usersRepository.delete(id);
      return this.therapistsRepository.delete(id);
    } catch (e) {
      await session.abortTransaction();
      throw e;
    } finally {
      session.endSession();
    }
  }
}
