import { BadRequestException } from "@nestjs/common";

export function checkGenreDublicates(moviesGenres: string[]) {
    const uniqueGenres = Array.from(new Set(moviesGenres));

    if (uniqueGenres.length !== moviesGenres.length) {
        throw new BadRequestException(`Duplicates found in genres!`);
    }

}
