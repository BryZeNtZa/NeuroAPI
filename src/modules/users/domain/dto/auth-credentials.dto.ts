import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthCredentialsDto {
  @ApiProperty({
    description: 'Username provided',
    type: String,
    required: false,
  })
  @MaxLength(100)
  readonly username?: string;

  @ApiProperty({
    description: 'Email provided',
    type: String,
    required: false,
  })
  @IsNotEmpty()
  @MaxLength(100)
  @IsEmail()
  readonly email?: string;

  @ApiProperty({
    description: 'Password',
    type: String,
    required: true,
  })
  @IsNotEmpty()
  @MaxLength(30)
  readonly password: string;
}
