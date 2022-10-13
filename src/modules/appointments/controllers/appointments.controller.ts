import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '@app/users/auth/guards/jwt-auth.guard';
import { Roles } from '@app/users/auth/roles.decorator';
import { Role } from '@app/users/domain/types/role.enum';

import { CreateAppointmentDto } from '../domain/dto/create-appointment.dto';
import { UpdateAppointmentDto } from '../domain/dto/update-appointment.dto';

import { Appointment } from '../domain/schemas/appointment.schema';
import { AppointmentsService } from '../services/appointments.service';

import { MongoExceptionFilter } from '@app/exceptions/filters/mongo-exception.filter';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';

@Controller('appointments')
export class AppointmentsController {
  constructor(private readonly appointmentdService: AppointmentsService) {}

  async index(): Promise<string> {
    return 'Hello appointments API';
  }

  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    type: Appointment,
    description: 'Fetched appointment',
  })
  @UseGuards(JwtAuthGuard)
  @Get('/get/:id')
  async getById(@Param('id') id: string): Promise<Appointment> {
    return this.appointmentdService.getById(id);
  }

  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: [Appointment],
    description: 'List of users',
  })
  @UseGuards(JwtAuthGuard)
  @Get('/list/:page')
  async list(@Param('page') page: number): Promise<Appointment[]> {
    return this.appointmentdService.getList(page);
  }

  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: Appointment,
    description: 'Created appointment',
  })
  @UseGuards(JwtAuthGuard)
  @Post('/create')
  async create(
    @Body() createAppointmentDto: CreateAppointmentDto,
  ): Promise<Appointment> {
    return this.appointmentdService.create(createAppointmentDto);
  }

  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    type: Appointment,
    description: 'Updated user',
  })
  @UseGuards(JwtAuthGuard)
  @Patch('/update/:id')
  @UseFilters(MongoExceptionFilter)
  async update(
    @Param('id') id: string,
    @Body() updateAppointmentDto: UpdateAppointmentDto,
  ): Promise<Appointment> {
    return this.appointmentdService.update(id, updateAppointmentDto);
  }

  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    type: Appointment,
    description: 'Deleted user',
  })
  @UseGuards(JwtAuthGuard)
  @Roles(Role.Admin)
  @Patch('/delete/:id')
  async delete(@Param('id') id: string): Promise<Appointment> {
    return this.appointmentdService.delete(id);
  }
}
