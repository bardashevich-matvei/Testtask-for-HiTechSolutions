import { IsBoolean,  IsString, IsArray, IsEnum } from 'class-validator';
import { Operation } from './Operation.enum';

export class StringFilter {
    @IsString()
    fieldName: string;

    @IsBoolean()
    exactMatch: boolean;

    @IsArray()
    @IsString({ each: true })
    values: Array<string>;

    @IsEnum(Operation)
    operation: Operation;
}