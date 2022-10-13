import {
  Body,
  Controller,
  Post,
  UseGuards,
  UseFilters,
  HttpStatus,
  Param,
  Get,
  Patch,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { MongoExceptionFilter } from '@app/exceptions/filters/mongo-exception.filter';

import { Roles } from '@app/users/auth/roles.decorator';
import { Role } from '@app/users/domain/types/role.enum';
import { JwtAuthGuard } from '@app/users/auth/guards/jwt-auth.guard';

import { Diagnosis } from '../domain/schemas/diagnosis.schema';
import { CreateDiagnosisDto } from '../domain/dto/create-diagnosis.dto';
import { UpdateDiagnosisDto } from '../domain/dto/update-diagnosis.dto';

import { DiagnosisService } from '../services/diagnosis.service';

@Controller('diagnosis')
export class DiagnosisController {
  constructor(private readonly service: DiagnosisService) {}

  async index(): Promise<string> {
    return 'Hello diagnosis API';
  }

  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    type: Diagnosis,
    description: 'Fetched diagnosis',
  })
  @UseGuards(JwtAuthGuard)
  @Get('/get/:id')
  async getDiagnosis(@Param('id') id: string): Promise<Diagnosis> {
    return this.service.getById(id);
  }

  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: [Diagnosis],
    description: 'List of diagnosiss',
  })
  @UseGuards(JwtAuthGuard)
  @Get('/list/:page')
  async list(@Param('page') page: number): Promise<Diagnosis[]> {
    return this.service.getList(page);
  }

  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: Diagnosis,
    description: 'Diagnosis created',
  })
  @UseGuards(JwtAuthGuard)
  @Post('/create')
  async create(@Body() dto: CreateDiagnosisDto): Promise<Diagnosis> {
    return this.service.create(dto);
  }

  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    type: Diagnosis,
    description: 'Diagnosis updated',
  })
  @UseGuards(JwtAuthGuard)
  @Patch('/update/:id')
  @UseFilters(MongoExceptionFilter)
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateDiagnosisDto,
  ): Promise<Diagnosis> {
    return this.service.update(id, dto);
  }

  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    type: Diagnosis,
    description: 'Diagnosis deleted ',
  })
  @UseGuards(JwtAuthGuard)
  @Roles(Role.Admin)
  @Patch('/delete/:id')
  async delete(@Param('id') id: string): Promise<Diagnosis> {
    return this.service.delete(id);
  }
}
