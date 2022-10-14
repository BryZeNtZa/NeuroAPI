import { Module } from '@nestjs/common';

import { configs } from './config/all.config';
import { mongooseModuleConfigured } from './core/database/database.module';
import { UsersModule } from './modules/users/users.module';
import { AppointmentsModule } from './modules/appointments/appointments.module';
import { BillingModule } from './modules/billing/billing.module';

@Module({
  imports: [
    configs,
    mongooseModuleConfigured,
    UsersModule,
    AppointmentsModule,
    BillingModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
