import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsDateString,
  ValidateNested,
} from 'class-validator';
import { BaseDto } from '../../entity/dto/base.dto';
import { Role } from '../../entity/role.entity';
import { Type } from 'class-transformer';
import { RoleDto } from './role.dto';
import {ClinicDto} from "./clinic.dto";
import {Clinic} from "../../entity/clinic.entity";

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
  @IsDateString()
  dateOfBirth: Date;

  @ValidateNested({ each: true })
  @Type(() => RoleDto)
  roles: Role[];

  @ValidateNested({ each: true })
  @Type(() => ClinicDto)
  clinic: Clinic[];
}
