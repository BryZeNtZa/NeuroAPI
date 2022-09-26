import { Module } from '@nestjs/common';
import { configs } from './config/all.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [configs, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
