import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Genre } from "./schemas/genre.schema";
import { Model } from "mongoose";

@Injectable()
export class GenreRepository {
    constructor(
        @InjectModel(Genre.name)
        private genreModel: Model<Genre>,
    ) {}

    async create(genre: Genre): Promise<Genre> {
        const savedGenre = new this.genreModel(genre);
        return await savedGenre.save();
    }

    async findOne(selector: any): Promise<Genre> {
        return await(new Genre());
    }
}