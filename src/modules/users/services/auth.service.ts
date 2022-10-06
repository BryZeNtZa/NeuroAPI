import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { AuthCredentialsDto } from '../domain/dto/auth-credentials.dto';
import { RegisterUserDto } from '../domain/dto/register-user.dto';

import { User } from '../domain/schemas/user.schema';
import { Role } from '../domain/types/role.enum';
import { UsersRepository } from '../repository/users.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async token(user: User) {
    if (user) {
      const payload = { username: user.email, sub: user.first_name };
      return {
        token: this.jwtService.sign(payload),
        expires: '60',
      };
    }
    return null;
  }

  async authenticate(credentials: AuthCredentialsDto): Promise<any> {
    const user: User = await this.usersRepository.findOne(credentials);
    if (user && user.password === credentials.password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async register(dto: RegisterUserDto): Promise<User> {
    return this.usersRepository.create({
      first_name: dto.first_name,
      last_name: dto.last_name,
      password: dto.password,
      email: dto.email,
      roles: [Role.Visitor],
    });
  }
}
