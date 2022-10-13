import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class CreateTreatmentDto {
  @ApiProperty({
    description: 'Parent disorder',
    required: false,
    default: 0,
  })
  parent_id?: Types.ObjectId;

  @ApiProperty({
    description: 'Parent disorder',
    required: false,
    default: 0,
  })
  therapist_id?: Types.ObjectId;

  @ApiProperty({
    description: 'Name of the disorder',
    type: String,
    required: false,
  })
  name?: string;

  @ApiProperty({
    description: 'Useful note id',
    required: false,
    default: 0,
  })
  note_id?: Types.ObjectId;

  @ApiProperty({
    description: 'Useful note',
    required: false,
    default: 0,
  })
  note?: string;
}
