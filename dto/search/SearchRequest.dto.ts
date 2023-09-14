import { IsOptional, ValidateNested, IsArray, IsInt, IsString, IsBoolean, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { StringFilter } from './StringFilter.dto';
import { Operation } from './Operation.enum';

export class SearchRequest {
    @IsArray()
    @ValidateNested({each: true})
    @Type(() => StringFilter)
    @IsOptional()
    stringFilters?: Array<StringFilter>;

    @IsInt()
    @IsOptional()
    offset?: number;

    @IsInt()
    @IsOptional()
    limit?: number;

    @IsString()
    @IsOptional()
    sortField?: string;

    @IsBoolean()
    @IsOptional()
    descending?: boolean;

    @IsEnum(Operation)
    @IsOptional()
    operation?: Operation;
}