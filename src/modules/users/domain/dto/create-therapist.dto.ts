import { MaxLength, IsArray, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { Specialization } from '@app/common/domain/schemas/specialization.schema';

export class CreateTherapistDto extends CreateUserDto {
  @ApiProperty({
    description: "Therapist's user id",
    isArray: true,
    required: false,
    default: [],
  })
  user_id?: string;

  @ApiProperty({
    description: "Therapist's avalability",
    isArray: true,
    required: false,
    default: '',
  })
  availability_id: string;

  @IsArray()
  @ApiProperty({
    description: "Therapist's specializations",
    isArray: true,
    required: false,
    default: [],
  })
  specializations: [Specialization];

  @MaxLength(1000)
  @ApiProperty({
    description: 'Therapist bio',
    type: String,
    required: false,
  })
  bio?: string;

  @ApiProperty({
    description: 'Is the therapist officially approved',
    required: false,
    default: false,
  })
  approve?: boolean;

  @ApiProperty({
    description: 'Therapist insurance id',
    type: String,
    required: false,
  })
  insurance_id?: string;

  @ApiProperty({
    description: 'Fees payable',
    required: false,
    default: 0,
  })
  @IsNumber()
  fee: number;
}
