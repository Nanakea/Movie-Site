import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Favorite } from './favorite.entity';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectRepository(Favorite)
    private favoritesRepository: Repository<Favorite>,
  ) {}

  async findAll(): Promise<Favorite[]> {
    return this.favoritesRepository.find();
  }

  async findByUserId(userId: number): Promise<Favorite[]> {
    return this.favoritesRepository.find({ where: { user: { id: userId } } });
  }

  async create(userId: number, movieId: number): Promise<Favorite> {
    const favorite = new Favorite();
    favorite.user = { id: userId } as any; // Assuming you have the User entity properly implemented
    favorite.movie = { id: movieId } as any; // Assuming you have the Movie entity properly implemented
    return this.favoritesRepository.save(favorite);
  }

  async delete(id: number): Promise<void> {
    const deleteResult = await this.favoritesRepository.delete(id);
    if (deleteResult.affected === 0) {
      throw new NotFoundException('Favorite not found');
    }
  }
}