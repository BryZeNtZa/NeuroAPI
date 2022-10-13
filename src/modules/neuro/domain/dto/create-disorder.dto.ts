import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class CreateDisorderDto {
  @ApiProperty({
    description: 'Parent disorder',
    required: false,
    default: null,
  })
  parent_id?: Types.ObjectId;

  @ApiProperty({
    description: 'Name of the disorder',
    type: String,
    required: true,
  })
  name: string;
}
