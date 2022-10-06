import { ConfigModule } from '@nestjs/config';
import databaseConfig from './database.config';
import securityConfig from './security.config';

export const configs = ConfigModule.forRoot({
  load: [databaseConfig, securityConfig],
});
