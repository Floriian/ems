import { ApiProperty } from '@nestjs/swagger';
import { passwordCriteria } from './password-criteria.util';
import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsStrongPassword,
} from 'class-validator';
import { Match } from '../match.decorator';

export class SignUpDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsStrongPassword(passwordCriteria)
  @IsNotEmpty()
  password: string;

  @IsString()
  @Match(SignUpDto, (s) => s.password, {
    message: "password's doesn't matches",
  })
  confirmPassword: string;
}
