import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class CreateDiagnosisDto {
  @ApiProperty({
    description: 'Patient id being diagnosed',
    type: String,
    required: false,
  })
  patient_id?: Types.ObjectId;

  @ApiProperty({
    description: 'Therapist id who performed the diagnosis',
    type: String,
    required: false,
  })
  therapist_id?: Types.ObjectId;

  @ApiProperty({
    description: 'Disorder diagnosed',
    type: String,
    required: false,
  })
  disorder_id?: Types.ObjectId;

  @ApiProperty({
    description: 'Date of the diagnostic',
    type: String,
    required: false,
  })
  date?: Date;
}
