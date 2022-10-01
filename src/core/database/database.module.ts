import { Module, DynamicModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_URI } from '../../config/constants';

@Module({})
export class DatabaseModule {
  static forRoot(): DynamicModule {
    return MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>(DATABASE_URI),
      }),
      inject: [ConfigService],
    });
  }
}
