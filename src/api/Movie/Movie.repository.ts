import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Movie } from "./schemas/movie.schema";
import { Model } from "mongoose";
import { SearchRequest } from "@dto/search/SearchRequest.dto";
import { mapSearchRequestForMongo } from "@app/utils/mongo-search.utils";
import { CreateMovieRequestDto } from "@dto/movie/Requests/create-movie-request.dto";
import { UpdateMovieRequestDto } from "@dto/movie/Requests/update-movie-request.dto";
import { MovieResponseDto } from "@dto/movie/Responses/movie-response.dto";

@Injectable()
export class MovieRepository {
    constructor(
        @InjectModel(Movie.name)
        private movieModel: Model<Movie>,
    ) {}

    async create(movie: CreateMovieRequestDto): Promise<MovieResponseDto> {
        const savedMovie = new this.movieModel(movie);
        return savedMovie.save();
    }

    async findAll(limit?: number, offset?: number): Promise<MovieResponseDto[]> {
        const selector: SearchRequest = { limit: limit, offset: offset };
        const { filterQuery, queryOptions } = mapSearchRequestForMongo(selector);

        return this.movieModel.find(filterQuery, null, queryOptions).lean().exec();
    }

    async update(id: string, movie: UpdateMovieRequestDto): Promise<MovieResponseDto> {
        return await this.movieModel.findByIdAndUpdate({_id: id}, movie).exec();
    }

    async delete(id: string): Promise<MovieResponseDto> {
        return this.movieModel.findByIdAndRemove({_id: id}).exec();
    }

    async search(selector: SearchRequest): Promise<MovieResponseDto[]> {
        const { filterQuery, queryOptions } = mapSearchRequestForMongo(selector);

        return this.movieModel.find(filterQuery, null, queryOptions).lean().exec();
    }
}