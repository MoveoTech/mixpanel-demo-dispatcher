import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FavoritesService } from './favorites.service';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post()
  createFavorite(@Body() body: { favoriteItem: any }) {
    return this.favoritesService.create(body);
  }

  @Get()
  findAll() {
    return this.favoritesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.favoritesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFavoriteDto: any) {
    return this.favoritesService.update(+id, updateFavoriteDto);
  }

  @Delete(':title')
  deleteFavorite(@Param('title') title: string) {
    console.log(title);
    return this.favoritesService.remove(title);
  }
}
