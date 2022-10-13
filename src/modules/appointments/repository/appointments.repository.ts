import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import {
  Appointment,
  AppointmentDocument,
} from '../domain/schemas/appointment.schema';

@Injectable()
export class AppointementsRepository {
  constructor(
    @InjectModel(Appointment.name) private model: Model<AppointmentDocument>,
  ) {}

  async findOne(
    appointementFilterQuery: FilterQuery<Appointment>,
  ): Promise<Appointment> {
    Logger.log('Request received : ', appointementFilterQuery);
    return this.model.findOne(appointementFilterQuery);
  }

  async find(
    appointementFilterQuery: FilterQuery<Appointment>,
  ): Promise<Appointment[]> {
    return this.model.find(appointementFilterQuery);
  }

  async create(appointment: Partial<Appointment>): Promise<Appointment> {
    const newUser = new this.model(appointment);
    return newUser.save();
  }

  async findOneAndUpdate(
    appointementFilterQuery: FilterQuery<Appointment>,
    appointment: Partial<Appointment>,
  ): Promise<Appointment> {
    return this.model.findOneAndUpdate(appointementFilterQuery, appointment, {
      new: true,
    });
  }

  async update(
    id: string,
    appointment: Partial<Appointment>,
  ): Promise<Appointment> {
    return await this.model.findByIdAndUpdate(id, appointment).exec();
  }

  async delete(id: string): Promise<Appointment> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
