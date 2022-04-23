import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Favorite, FavoriteDocument } from './favorites.schema';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectModel(Favorite.name)
    private readonly FavoriteModel: Model<FavoriteDocument>,
  ) {}
  async create(favoriteArticle: any): Promise<Favorite> {
    const favorite = new this.FavoriteModel(favoriteArticle);
    return favorite.save();
    // const doc = (await favorite.save()).toObject();
    // return doc;
  }

  findAll() {
    return `This action returns all favorites`;
  }

  findOne(id: number) {
    return `This action returns a #${id} favorite`;
  }

  remove(title: string) {
    return `This action removes a #${title} favorite`;
  }
}
