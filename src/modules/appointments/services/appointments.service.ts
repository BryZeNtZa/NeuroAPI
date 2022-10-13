import { Injectable } from '@nestjs/common';

import { CreateAppointmentDto } from '../domain/dto/create-appointment.dto';
import { UpdateAppointmentDto } from '../domain/dto/update-appointment.dto';

import { Appointment } from '../domain/schemas/appointment.schema';
import { AppointementsRepository } from '../repository/appointments.repository';

@Injectable()
export class AppointmentsService {
  constructor(
    private readonly appointmentsRepository: AppointementsRepository,
  ) {}

  async getById(id: string): Promise<Appointment> {
    return this.appointmentsRepository.findOne({ id });
  }

  async getList(page: number): Promise<Appointment[]> {
    console.log(page);
    return this.appointmentsRepository.find({});
  }

  async create(dto: CreateAppointmentDto): Promise<Appointment> {
    return this.appointmentsRepository.create(dto);
  }

  async update(id: string, dto: UpdateAppointmentDto): Promise<Appointment> {
    return this.appointmentsRepository.findOneAndUpdate({ id }, dto);
  }

  async delete(id: string): Promise<Appointment> {
    return this.appointmentsRepository.delete(id);
  }
}
