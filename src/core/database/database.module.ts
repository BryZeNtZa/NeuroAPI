import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_URI } from '../../config/constants';

export const mongooseModuleConfigured = MongooseModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => ({
    uri: configService.get<string>(DATABASE_URI),
  }),
  inject: [ConfigService],
});
