import { Body, Controller, Post, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';

import { AuthCredentialsDto } from '../domain/dto/auth-credentials.dto';
import { RegisterUserDto } from '../domain/dto/register-user.dto';

import { User } from '../domain/schemas/user.schema';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async authenticate(
    @Body() authCredentialsDto: AuthCredentialsDto,
  ): Promise<User> {
    return this.authService.authenticate(authCredentialsDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/token')
  getProfile(@Body() authCredentialsDto: AuthCredentialsDto) {
    return authCredentialsDto;
  }

  @Post('/register')
  async register(@Body() createUserDto: RegisterUserDto): Promise<User> {
    return this.authService.register(createUserDto);
  }
}
