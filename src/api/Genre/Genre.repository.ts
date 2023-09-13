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
        return savedGenre.save();
    }

    async findAll(): Promise<Genre[]> {
        return this.genreModel.find().exec();
    }

    async delete(id: string): Promise<Genre> {
        const updatedGenre = 
            await this.genreModel.findByIdAndRemove({_id: id}).exec();
        return updatedGenre;
    }
}