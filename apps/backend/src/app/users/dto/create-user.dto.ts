import { Match, passwordCriteria } from '@ems/validation';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword(passwordCriteria)
  password: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword()
  @Match(CreateUserDto, (s) => s.password)
  confirmPassword: string;
}
