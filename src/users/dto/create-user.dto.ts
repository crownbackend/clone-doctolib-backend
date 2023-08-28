import { IsNotEmpty, IsString, IsEmail, IsDate } from 'class-validator';
import { BaseDto } from '../../entity/dto/base.dto';

export class CreateUserDto extends BaseDto {
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsDate()
  dateOfBirth: Date;
}
