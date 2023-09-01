import { IsNotEmpty, IsString } from 'class-validator';
import { BaseDto } from '../../entity/dto/base.dto';

export class RoleDto extends BaseDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
