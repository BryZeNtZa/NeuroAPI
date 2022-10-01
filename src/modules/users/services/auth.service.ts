import { Injectable } from '@nestjs/common';

import { AuthCredentialsDto } from '../domain/dto/auth-credentials.dto';
import { RegisterUserDto } from '../domain/dto/register-user.dto';

import { User } from '../domain/schemas/user.schema';
import { UsersRepository } from '../repository/users.repository';

@Injectable()
export class AuthService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async authenticate(credentials: AuthCredentialsDto): Promise<User> {
    return this.usersRepository.findOne({ credentials });
  }

  async register(dto: RegisterUserDto): Promise<User> {
    return this.usersRepository.create({
      first_name: dto.first_name,
      last_name: dto.last_name,
      password: dto.password,
      email: dto.email,
    });
  }
}
