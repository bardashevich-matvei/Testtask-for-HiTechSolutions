import { Expose, Transform } from 'class-transformer';

export class MovieResponseDto {
    @Expose()
    @Transform( ({ obj }: { obj: { _id: string }}) => obj._id)
    id: string;

    @Expose()
    title: string;

    @Expose()
    description: string;

    @Expose()
    releaseDate: Date;

    @Expose()
    genres: Array<string>;

    constructor(partial: Partial<MovieResponseDto>) {
        Object.assign(this, partial);
    }
}