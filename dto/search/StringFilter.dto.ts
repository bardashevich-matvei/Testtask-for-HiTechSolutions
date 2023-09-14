import { IsBoolean,  IsString, IsArray, IsEnum, IsOptional } from 'class-validator';
import { Operation } from './Operation.enum';

export class StringFilter {
    @IsString()
    fieldName: string;

    @IsBoolean()
    exactMatch: boolean;

    @IsArray()
    @IsString({ each: true })
    values: Array<string>;
}