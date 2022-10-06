import { IsNotEmpty, MaxLength, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterUserDto {
  @ApiProperty({
    description: "User's first name",
    type: String,
    required: true,
  })
  @IsNotEmpty()
  @MaxLength(100)
  readonly first_name: string;

  @ApiProperty({
    description: "User's last name",
    type: String,
    required: false,
  })
  @IsNotEmpty()
  @MaxLength(100)
  last_name: string;

  @ApiProperty({
    description: "User's pseudo name",
    type: String,
    required: false,
  })
  @IsNotEmpty()
  @MaxLength(100)
  @IsEmail()
  email: string;

  @ApiProperty({
    description: "User's email",
    type: String,
    required: false,
  })
  @IsNotEmpty()
  @MaxLength(100)
  username: string;

  @ApiProperty({
    description: "User's password",
    type: String,
    required: false,
  })
  @IsNotEmpty()
  @MaxLength(100)
  password: string;

  @ApiProperty({
    description: 'Password confirmation',
    type: String,
    required: false,
  })
  @IsNotEmpty()
  @MaxLength(100)
  password_confirm: string;
}
