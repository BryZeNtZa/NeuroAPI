import { Injectable } from '@nestjs/common';

import { CreateUserDto } from '../domain/dto/create-user.dto';
import { UpdateUserDto } from '../domain/dto/update-user.dto';

import { User } from '../domain/schemas/user.schema';
import { UsersRepository } from '../repository/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getUserById(userId: string): Promise<User> {
    return this.usersRepository.findOne({ userId });
  }

  async getUsers(): Promise<User[]> {
    return this.usersRepository.find({});
  }

  async create(dto: CreateUserDto): Promise<User> {
    return this.usersRepository.create({
      first_name: dto.first_name,
      last_name: dto.last_name,
      password: '',
      email: '',
    });
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    return this.usersRepository.findOneAndUpdate({ id }, dto);
  }
}
