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

import { Disorder } from '../domain/schemas/disorder.schema';
import { CreateDisorderDto } from '../domain/dto/create-disorder.dto';
import { UpdateDisorderDto } from '../domain/dto/update-disorder.dto';

import { DisordersService } from '../services/disorders.service';

@Controller('disorders')
export class DisordersController {
  constructor(private readonly service: DisordersService) {}

  async index(): Promise<string> {
    return 'Hello disorders API';
  }

  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    type: Disorder,
    description: 'Fetched disorders',
  })
  @UseGuards(JwtAuthGuard)
  @Get('/get/:id')
  async getDisorders(@Param('id') id: string): Promise<Disorder> {
    return this.service.getById(id);
  }

  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: [Disorder],
    description: 'List of disorders',
  })
  @UseGuards(JwtAuthGuard)
  @Get('/list/:page')
  async list(@Param('page') page: number): Promise<Disorder[]> {
    return this.service.getList(page);
  }

  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: Disorder,
    description: 'Disorders created',
  })
  @UseGuards(JwtAuthGuard)
  @Post('/create')
  async create(@Body() dto: CreateDisorderDto): Promise<Disorder> {
    return this.service.create(dto);
  }

  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    type: Disorder,
    description: 'Disorders updated',
  })
  @UseGuards(JwtAuthGuard)
  @Patch('/update/:id')
  @UseFilters(MongoExceptionFilter)
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateDisorderDto,
  ): Promise<Disorder> {
    return this.service.update(id, dto);
  }

  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    type: Disorder,
    description: 'Disorders deleted ',
  })
  @UseGuards(JwtAuthGuard)
  @Roles(Role.Admin)
  @Patch('/delete/:id')
  async delete(@Param('id') id: string): Promise<Disorder> {
    return this.service.delete(id);
  }
}
