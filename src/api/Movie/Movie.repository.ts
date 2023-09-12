import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Movie } from "./schemas/movie.schema";
import { Model } from "mongoose";

@Injectable()
export class MovieRepository {
    constructor(
        @InjectModel(Movie.name)
        private movieModel: Model<Movie>,
    ) {}

    async create(movie: Movie): Promise<Movie> {
        const savedMovie = new this.movieModel(movie);
        return await savedMovie.save();
    }

    async findOne(selector: any): Promise<Movie> {
        return await(new Movie());
    }
}