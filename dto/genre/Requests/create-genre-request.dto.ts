import { IsString } from 'class-validator';

export class CreateGenreRequestDto {
    @IsString()
    name: string;
}