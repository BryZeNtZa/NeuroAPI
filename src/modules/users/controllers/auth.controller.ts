import { Body, Controller, Post } from '@nestjs/common';

import { AuthCredentialsDto } from '../domain/dto/auth-credentials.dto';
import { RegisterUserDto } from '../domain/dto/register-user.dto';

import { User } from '../domain/schemas/user.schema';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async authenticate(
    @Body() authCredentialsDto: AuthCredentialsDto,
  ): Promise<User> {
    return this.authService.authenticate(authCredentialsDto);
  }

  @Post('/register')
  async register(@Body() createUserDto: RegisterUserDto): Promise<User> {
    return this.authService.register(createUserDto);
  }
}
