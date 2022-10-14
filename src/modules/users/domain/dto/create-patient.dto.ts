import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { Types } from 'mongoose';

export class CreatePatientDto extends CreateUserDto {
  @ApiProperty({
    description: 'User ID of the Patient',
    required: false,
    default: null,
  })
  user_id?: Types.ObjectId;

  @ApiProperty({
    description: 'Age of the Patient',
    required: false,
    default: 0,
  })
  @IsNumber()
  age: number;
}
