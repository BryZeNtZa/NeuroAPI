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
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../domain/types/role.enum';

import { CreateUserDto } from '../domain/dto/create-user.dto';
import { UpdateUserDto } from '../domain/dto/update-user.dto';

import { User } from '../domain/schemas/user.schema';
import { UsersService } from '../services/users.service';

import { MongoExceptionFilter } from '@app/exceptions/filters/mongo-exception.filter';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  async index(): Promise<string> {
    return 'Hello users API';
  }

  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    type: User,
    description: 'Fetched user',
  })
  @UseGuards(JwtAuthGuard)
  @Get('/get/:id')
  async getUser(@Param('id') id: string): Promise<User> {
    return this.usersService.getUserById(id);
  }

  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: [User],
    description: 'List of users',
  })
  @UseGuards(JwtAuthGuard)
  @Get('/list/:page')
  async list(@Param('page') page: number): Promise<User[]> {
    return this.usersService.getUsers(page);
  }

  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: User,
    description: 'Created user',
  })
  @UseGuards(JwtAuthGuard)
  @Post('/create')
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    type: User,
    description: 'Updated user',
  })
  @UseGuards(JwtAuthGuard)
  @Patch('/update/:id')
  @UseFilters(MongoExceptionFilter)
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.update(id, updateUserDto);
  }

  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    type: User,
    description: 'Deleted user',
  })
  @UseGuards(JwtAuthGuard)
  @Roles(Role.Admin)
  @Patch('/delete/:id')
  async delete(@Param('id') id: string): Promise<User> {
    return this.usersService.delete(id);
  }
}
