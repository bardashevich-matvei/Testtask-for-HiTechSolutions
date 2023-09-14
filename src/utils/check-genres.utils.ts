import { Movie } from '@app/api/Movie/schemas/movie.schema';
import { BadRequestException } from '@nestjs/common';

export function checkGenres(movie: Movie, genres: string[]) {
  movie.genres.forEach((item) => {
    if (!genres.includes(item)) {
      throw new BadRequestException(`Genre ${item} does not exist!`);
    }
  });
}
