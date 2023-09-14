import { Expose, Transform } from 'class-transformer';

export class GenreResponseDto {
    @Expose()
    @Transform( ({ obj }: { obj: { _id: string }}) => obj._id)
    id: string;

    @Expose()
    name: string;

    constructor(partial: Partial<GenreResponseDto>) {
        Object.assign(this, partial);
    }
}