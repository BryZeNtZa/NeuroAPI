import { IsNotEmpty, MaxLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsNotEmpty()
  @MaxLength(100)
  readonly username: string;

  @IsNotEmpty()
  @MaxLength(30)
  readonly password: string;
}
