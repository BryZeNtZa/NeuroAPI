import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { StrategyConfig } from 'src/core/security/security.module';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(jwtStrategyConfig: StrategyConfig) {
    super(jwtStrategyConfig.get());
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
