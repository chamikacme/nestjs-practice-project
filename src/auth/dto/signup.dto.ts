import { IsEmail, IsNotEmpty } from 'class-validator';

export class SignupDto {
  @IsNotEmpty()
  firstName: string;

  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
