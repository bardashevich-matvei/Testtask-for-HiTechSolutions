import { Transform } from 'class-transformer';
import { IsString, IsArray, MinDate, IsDate, IsOptional } from 'class-validator';

export class UpdateMovieRequestDto {
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @Transform( ({ value }) => new Date(value))
    @IsDate()
    @IsOptional()
    releaseDate?: Date;

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    genres?: Array<string>;
}