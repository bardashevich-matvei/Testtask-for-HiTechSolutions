import { IsOptional, ValidateNested, IsArray, IsInt, IsString, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';
import { StringFilter } from './StringFilter.dto';

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
}