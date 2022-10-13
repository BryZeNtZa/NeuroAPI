import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { Disorder, DisorderSchema } from './domain/schemas/disorder.schema';
import { Diagnosis, DiagnosisSchema } from './domain/schemas/diagnosis.schema';
import { Treatment, TreatmentSchema } from './domain/schemas/treatment.schema';

import { DisordersController } from './controllers/disorders.controller';
import { DiagnosisController } from './controllers/diagnosis.controller';
import { TreatmentController } from './controllers/treatment.controller';

import { DisordersRepository } from './repository/disorders.repository';
import { DiagnosisRepository } from './repository/diagnosis.repository';
import { TreatmentRepository } from './repository/treatment.repository';

import { DisordersService } from './services/disorders.service';
import { DiagnosisService } from './services/diagnosis.service';
import { TreatmentService } from './services/treatment.service';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      { name: Disorder.name, schema: DisorderSchema },
      { name: Diagnosis.name, schema: DiagnosisSchema },
      { name: Treatment.name, schema: TreatmentSchema },
    ]),
  ],
  controllers: [DisordersController, DiagnosisController, TreatmentController],
  providers: [
    DisordersRepository,
    DiagnosisRepository,
    TreatmentRepository,
    DisordersService,
    DiagnosisService,
    TreatmentService,
  ],
})
export class NeuroModule {}
