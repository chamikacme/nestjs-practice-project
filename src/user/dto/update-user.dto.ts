import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserDto {
	@IsString()
	@IsNotEmpty()
	firstName: string;
  
	@IsString()
	lastName: string;
  
	@IsEmail()
	@IsNotEmpty()
	email: string;
  
	@IsString()
	@IsNotEmpty()
	password: string;
  }
  