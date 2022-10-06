import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ExtractJwt } from 'passport-jwt';

import { SECURITY_KEY, SECURITY_KEY_EXPIRES } from '../../config/constants';
import { Injectable } from '@nestjs/common';

export const jwtModuleConfigured = JwtModule.registerAsync({
  imports: [ConfigModule, PassportModule, JwtModule],
  useFactory: async (configService: ConfigService) => ({
    secret: configService.get<string>(SECURITY_KEY),
    signOptions: {
      expiresIn: `${configService.get<string>(SECURITY_KEY_EXPIRES)}s`,
    },
  }),
  inject: [ConfigService],
});

@Injectable()
export class StrategyConfig {
  constructor(private configService: ConfigService) {}
  public get(): any {
    return {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: this.configService.get<string>(SECURITY_KEY),
    };
  }
}
