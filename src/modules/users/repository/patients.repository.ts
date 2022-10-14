import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Patient, PatientDocument } from '../domain/schemas/patient.schema';

@Injectable()
export class PatientsRepository {
  constructor(
    @InjectModel(Patient.name) private model: Model<PatientDocument>,
  ) {}

  async findOne(patientFilterQuery: FilterQuery<Patient>): Promise<Patient> {
    return this.model.findOne(patientFilterQuery);
  }

  async find(patientsFilterQuery: FilterQuery<Patient>): Promise<Patient[]> {
    return this.model.find(patientsFilterQuery);
  }

  async create(patient: Patient): Promise<Patient> {
    const newPatient = new this.model(patient);
    return newPatient.save();
  }

  async findOneAndUpdate(
    patientFilterQuery: FilterQuery<Patient>,
    patient: Partial<Patient>,
  ): Promise<Patient> {
    return this.model.findOneAndUpdate(patientFilterQuery, patient, {
      new: true,
    });
  }

  async update(id: string, patient: Partial<Patient>): Promise<Patient> {
    return await this.model.findByIdAndUpdate(id, patient).exec();
  }

  async delete(id: string): Promise<Patient> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
