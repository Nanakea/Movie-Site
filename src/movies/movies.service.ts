import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  async findAll(): Promise<Movie[]> {
    return this.movieRepository.find();
  }

  async findById(id: number): Promise<Movie> {
    const movie = await this.movieRepository.findOne({ where: { id } });
    if (!movie) {
      throw new NotFoundException('Movie not found');
    }
    return this.movieRepository.findOne({ where: { id } });
  }

  async create(movieData: Partial<Movie>): Promise<Movie> {
    const movie = this.movieRepository.create(movieData);
    return this.movieRepository.save(movie);
  }

  async update(id: number, movieData: Partial<Movie>): Promise<Movie> {
    const movie = await this.findById(id);
    Object.assign(movie, movieData);
    return this.movieRepository.save(movie);
  }

  async delete(id: number): Promise<void> {
    const deleteResult = await this.movieRepository.delete(id);
    if (deleteResult.affected === 0) {
      throw new NotFoundException('Movie not found');
    }
  }
}