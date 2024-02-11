import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
import { OptionalApiProperty } from '../api-property.decorator';

export class SignInDto {
  @OptionalApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @OptionalApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;
}
