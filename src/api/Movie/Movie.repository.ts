import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Movie } from "./schemas/movie.schema";
import { Model } from "mongoose";
import { SearchRequest } from "@dto/search/searchRequst.dto";
import { mapSearchRequestForMongo } from "@app/utils/mongo-search.utils";

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

    async findAll(limit?: number, offset?: number): Promise<Movie[]> {
        const selector: SearchRequest = { limit: limit, offset: offset };
        const { filterQuery, queryOptions } = mapSearchRequestForMongo(selector);

        return this.movieModel.find(filterQuery, null, queryOptions).lean().exec();
    }

    async update(id: string, movie: Movie): Promise<Movie> {
        return await this.movieModel.findByIdAndUpdate({_id: id}, movie).exec();
    }

    async delete(id: string): Promise<Movie> {
        return this.movieModel.findByIdAndRemove({_id: id}).exec();
    }

    async search(selector: SearchRequest): Promise<Movie[]> {
        const { filterQuery, queryOptions } = mapSearchRequestForMongo(selector);

        return this.movieModel.find(filterQuery, null, queryOptions).lean().exec();
    }
}