import {
  Body,
  Request,
  Controller,
  Post,
  UseGuards,
  UseFilters,
  HttpStatus,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiResponse } from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';

import { RegisterUserDto } from '../domain/dto/register-user.dto';
import { AuthCredentialsDto } from '../domain/dto/auth-credentials.dto';

import { User } from '../domain/schemas/user.schema';
import { AuthService } from '../services/auth.service';

import { MongoExceptionFilter } from '@app/exceptions/filters/mongo-exception.filter';
import { JwtTokenResponse } from '../domain/dto/auth-jwt-token.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiBody({ type: AuthCredentialsDto })
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: JwtTokenResponse,
    description: 'Auth token created',
  })
  @UseGuards(LocalAuthGuard)
  @Post('/token')
  async token(@Request() req) {
    return this.authService.token(req.user);
  }

  @ApiBody({ type: RegisterUserDto })
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: User,
    description: 'User registered successfully',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('/register')
  @UseFilters(MongoExceptionFilter)
  async register(@Body() createUserDto: RegisterUserDto): Promise<User> {
    return this.authService.register(createUserDto);
  }
}
