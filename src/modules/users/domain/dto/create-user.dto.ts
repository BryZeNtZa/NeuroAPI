import { MaxLength, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { RegisterUserDto } from './register-user.dto';
import { Gender } from '../types/gender.enum';
import { Role } from '../types/role.enum';

export class CreateUserDto extends RegisterUserDto {
  @ApiProperty({
    description: "User's gender",
    enum: Gender,
    enumName: 'Gender',
    required: false,
    default: Gender.Unknown,
  })
  gender?: Gender;

  @ApiProperty({
    description: "User's mobile number",
    type: String,
    required: false,
  })
  phone_number?: string;

  @ApiProperty({
    description: "User's List of roles",
    enum: Role,
    enumName: 'Role',
    isArray: true,
    required: false,
    default: [Role.Visitor],
  })
  @IsArray()
  @MaxLength(100)
  roles?: Role[];
}
