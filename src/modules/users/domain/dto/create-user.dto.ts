import { IsNotEmpty, MaxLength, IsEmail } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  @MaxLength(100)
  readonly first_name: string;

  @IsNotEmpty()
  @MaxLength(100)
  last_name: string;

  @MaxLength(100)
  @IsEmail()
  email?: string;

  @MaxLength(100)
  password?: string;
}
