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
        return savedMovie.save();
    }

    async findAll(): Promise<Movie[]> {
        return this.movieModel.find().exec();
    }

    async update(id: string, movie: Movie): Promise<Movie> {
        const updatedMovie = 
            await this.movieModel.findByIdAndUpdate({_id: id}, movie).exec();
        return updatedMovie;
    }

    async delete(id: string): Promise<Movie> {
        const updatedMovie = 
            await this.movieModel.findByIdAndRemove({_id: id}).exec();
        return updatedMovie;
    }

    async find(selector: any): Promise<Movie[]> {
        const updatedMovie = 
            await this.movieModel.find(selector).exec();
        return updatedMovie;
    }
}