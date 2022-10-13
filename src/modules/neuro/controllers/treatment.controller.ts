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

import { Treatment } from '../domain/schemas/treatment.schema';
import { CreateTreatmentDto } from '../domain/dto/create-treatment.dto';
import { UpdateTreatmentDto } from '../domain/dto/update-treatment.dto';

import { TreatmentService } from '../services/treatment.service';

@Controller('treatment')
export class TreatmentController {
  constructor(private readonly service: TreatmentService) {}

  async index(): Promise<string> {
    return 'Hello treatment API';
  }

  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    type: Treatment,
    description: 'Fetched treatment',
  })
  @UseGuards(JwtAuthGuard)
  @Get('/get/:id')
  async getTreatment(@Param('id') id: string): Promise<Treatment> {
    return this.service.getById(id);
  }

  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: [Treatment],
    description: 'List of treatments',
  })
  @UseGuards(JwtAuthGuard)
  @Get('/list/:page')
  async list(@Param('page') page: number): Promise<Treatment[]> {
    return this.service.getList(page);
  }

  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: Treatment,
    description: 'Treatment created',
  })
  @UseGuards(JwtAuthGuard)
  @Post('/create')
  async create(@Body() dto: CreateTreatmentDto): Promise<Treatment> {
    return this.service.create(dto);
  }

  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    type: Treatment,
    description: 'Treatment updated',
  })
  @UseGuards(JwtAuthGuard)
  @Patch('/update/:id')
  @UseFilters(MongoExceptionFilter)
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateTreatmentDto,
  ): Promise<Treatment> {
    return this.service.update(id, dto);
  }

  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    type: Treatment,
    description: 'Treatment deleted ',
  })
  @UseGuards(JwtAuthGuard)
  @Roles(Role.Admin)
  @Patch('/delete/:id')
  async delete(@Param('id') id: string): Promise<Treatment> {
    return this.service.delete(id);
  }
}
