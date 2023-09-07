import {BaseDto} from "../../entity/dto/base.dto";
import {IsNotEmpty, IsString, ValidateNested} from "class-validator";
import {Type} from "class-transformer";
import {PriceDto} from "./price.dto";

export class ClinicDto extends BaseDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    address: string;

    @IsNotEmpty()
    @IsString()
    city: string;

    @IsNotEmpty()
    @IsString()
    phoneNumber: string;

    @IsNotEmpty()
    @IsString()
    information: string;

    @IsNotEmpty()
    @IsString()
    presentation: string;

    @IsNotEmpty()
    @IsString()
    meansOfPayment: string;

    @IsNotEmpty()
    @IsString()
    ratesAndReimbursement: string;

    @ValidateNested({each: true})
    @Type(() => PriceDto)
    prices: number;
}