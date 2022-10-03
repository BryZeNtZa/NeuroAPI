import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { AuthCredentialsDto } from '../domain/dto/auth-credentials.dto';
import { RegisterUserDto } from '../domain/dto/register-user.dto';

import { User } from '../domain/schemas/user.schema';
import { UsersRepository } from '../repository/users.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async token(credentials: AuthCredentialsDto) {
    return this.authenticate(credentials)
      .then((u: User) => {
        return {
          access_token: this.jwtService.sign(u),
          expires: '60',
        };
      })
      .catch((e) => console.log('Error fetching the API token :', e));
  }

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
