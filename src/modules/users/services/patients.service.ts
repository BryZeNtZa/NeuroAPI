import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { CreateUserDto } from '../domain/dto/create-user.dto';
import { CreatePatientDto } from '../domain/dto/create-patient.dto';
import { UpdateUserDto } from '../domain/dto/update-user.dto';

import { Patient } from '../domain/schemas/patient.schema';
import { UsersRepository } from '../repository/users.repository';
import { PatientsRepository } from '../repository/patients.repository';
import { UpdatePatientDto } from '../domain/dto/update-patient.dto';

@Injectable()
export class PatientsService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly patientsRepository: PatientsRepository,
    @InjectConnection() private readonly connection: mongoose.Connection,
  ) {}

  async getById(id: string): Promise<Patient> {
    return this.patientsRepository.findOne({ id });
  }

  async getByUserId(id: string): Promise<Patient> {
    return this.patientsRepository.findOne({ user_id: id });
  }

  async getPatients(page: number): Promise<Patient[]> {
    console.log(page);
    return this.patientsRepository.find({});
  }

  async create(dto: CreatePatientDto): Promise<Patient> {
    const session = await this.connection.startSession();
    session.startTransaction();
    try {
      const userCreateDto = <CreateUserDto>dto;
      await this.usersRepository.create(userCreateDto);
      const patient = this.patientsRepository.create(dto);
      await session.commitTransaction();
      return patient;
    } catch (e) {
      await session.abortTransaction();
      throw e;
    } finally {
      session.endSession();
    }
  }

  async update(id: string, dto: UpdatePatientDto): Promise<Patient> {
    const userUpdateDto = <UpdateUserDto>dto;
    const session = await this.connection.startSession();
    session.startTransaction();
    try {
      await this.usersRepository.update(dto.user_id, userUpdateDto);
      return this.patientsRepository.update(id, dto);
    } catch (e) {
      await session.abortTransaction();
      throw e;
    } finally {
      session.endSession();
    }
  }

  async delete(id: string): Promise<Patient> {
    const session = await this.connection.startSession();
    session.startTransaction();
    try {
      const patient = await this.patientsRepository.findOne({ _id: id });
      if (!patient) {
        throw new Error('Patient not found !');
      }
      this.usersRepository.delete(id);
      return this.patientsRepository.delete(id);
    } catch (e) {
      await session.abortTransaction();
      throw e;
    } finally {
      session.endSession();
    }
  }
}
