import { Match, passwordCriteria } from '@ems/validation';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
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
