import { Module } from '@nestjs/common';

import { configs } from './config/all.config';
import { mongooseModuleConfigured } from './core/database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [configs, mongooseModuleConfigured, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
