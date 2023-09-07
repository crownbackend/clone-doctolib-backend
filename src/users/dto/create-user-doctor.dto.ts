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

export class CreateUserDoctorDto extends BaseDto {
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
}
