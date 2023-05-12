import { Controller, Get, Param, Post, Delete, Body } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { Favorite } from './favorite.entity';

interface CreateFavoriteDto {
  userId: number;
  movieId: number;
}

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  findAll(): Promise<Favorite[]> {
    return this.favoritesService.findAll();
  }

  @Get(':userId')
  findByUserId(@Param('userId') userId: number): Promise<Favorite[]> {
    return this.favoritesService.findByUserId(userId);
  }

  @Post()
  async create(@Body() createFavoriteDto: CreateFavoriteDto): Promise<Favorite> {
    const { userId, movieId } = createFavoriteDto;
    return this.favoritesService.create(userId, movieId);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.favoritesService.delete(id);
  }
}