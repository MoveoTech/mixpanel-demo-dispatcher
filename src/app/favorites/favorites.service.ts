import { Injectable } from '@nestjs/common';

@Injectable()
export class FavoritesService {
  create(createFavoriteDto: any) {
    return 'This action adds a new favorite';
  }

  findAll() {
    return `This action returns all favorites`;
  }

  findOne(id: number) {
    return `This action returns a #${id} favorite`;
  }

  update(id: number, updateFavoriteDto: any) {
    return `This action updates a #${id} favorite`;
  }

  remove(id: number) {
    return `This action removes a #${id} favorite`;
  }
}
