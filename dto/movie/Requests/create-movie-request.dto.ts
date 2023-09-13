import { Transform } from 'class-transformer';
import { IsString, IsArray, MinDate, IsDate, IsNotEmpty } from 'class-validator';

export class CreateMovieRequestDto {
    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsNotEmpty()
    @Transform( ({ value }) => new Date(value))
    @IsDate()
    @MinDate(new Date())
    releaseDate: Date;

    @IsArray()
    @IsString({ each: true })
    genres: Array<string>;
}