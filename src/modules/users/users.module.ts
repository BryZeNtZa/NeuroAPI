import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';

import { UsersController } from './controllers/users.controller';
import { AuthController } from './controllers/auth.controller';
import { UsersRepository } from './repository/users.repository';
import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';
import { User, UserSchema } from './domain/schemas/user.schema';

import { LocalStrategy } from './auth/strategies/local.strategy';
import { JwtStrategy } from './auth/strategies/jwt.strategy';
import { StrategyConfig } from '../../core/security/security.module';

import { jwtModuleConfigured } from '../../core/security/security.module';

@Module({
  imports: [
    ConfigModule,
    PassportModule,
    jwtModuleConfigured,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController, AuthController],
  providers: [
    UsersService,
    AuthService,
    UsersRepository,
    StrategyConfig,
    LocalStrategy,
    JwtStrategy,
  ],
})
export class UsersModule {}
