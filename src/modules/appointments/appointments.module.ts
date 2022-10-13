import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { AppointmentsService } from './services/appointments.service';
import { AppointementsRepository } from './repository/appointments.repository';
import * as appointement from './domain/schemas/appointment.schema';
import { AppointmentsController } from './controllers/appointments.controller';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      {
        name: appointement.Appointment.name,
        schema: appointement.AppointmentSchema,
      },
    ]),
  ],
  controllers: [AppointmentsController],
  providers: [AppointmentsService, AppointementsRepository],
})
export class AppointmentsModule {}
