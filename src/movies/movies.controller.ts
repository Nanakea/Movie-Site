import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(private movieService: MoviesService) {}

  @Get()
  findAll(): Promise<Movie[]> {
    return this.movieService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number): Promise<Movie> {
    return this.movieService.findById(id);
  }

  @Post()
  create(@Body() movieData: Partial<Movie>): Promise<Movie> {
    return this.movieService.create(movieData);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() movieData: Partial<Movie>): Promise<Movie> {
    return this.movieService.update(id, movieData);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.movieService.delete(id);
  }
}