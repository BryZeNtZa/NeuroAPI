import { ConfigModule } from '@nestjs/config';
import databaseConfig from './database.config';

export const configs = ConfigModule.forRoot({
  load: [databaseConfig],
});
