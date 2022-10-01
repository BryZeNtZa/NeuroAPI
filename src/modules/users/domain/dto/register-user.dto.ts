import { IsNotEmpty, MaxLength, IsEmail } from 'class-validator';

export class RegisterUserDto {
  @IsNotEmpty()
  @MaxLength(100)
  readonly first_name: string;

  @IsNotEmpty()
  @MaxLength(100)
  last_name: string;

  @IsNotEmpty()
  @MaxLength(100)
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MaxLength(100)
  password: string;

  @IsNotEmpty()
  @MaxLength(100)
  password_confirm: string;
}
