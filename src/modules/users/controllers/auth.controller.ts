import {
  Body,
  Request,
  Controller,
  Post,
  UseGuards,
  UseFilters,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';

import { RegisterUserDto } from '../domain/dto/register-user.dto';
import { AuthCredentialsDto } from '../domain/dto/auth-credentials.dto';

import { User } from '../domain/schemas/user.schema';
import { AuthService } from '../services/auth.service';

import { MongoExceptionFilter } from '@app/exceptions/filters/mongo-exception.filter';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiBody({ type: AuthCredentialsDto })
  @UseGuards(LocalAuthGuard)
  @Post('/token')
  async token(@Request() req) {
    return this.authService.token(req.user);
  }

  @ApiBody({ type: RegisterUserDto })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('/register')
  @UseFilters(MongoExceptionFilter)
  async register(@Body() createUserDto: RegisterUserDto): Promise<User> {
    return this.authService.register(createUserDto);
  }
}
