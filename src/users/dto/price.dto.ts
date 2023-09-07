import {IsNotEmpty, IsNumber, IsString} from 'class-validator';
import { BaseDto } from '../../entity/dto/base.dto';

export class PriceDto extends BaseDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;
}
