import { Resolver, Query } from '@nestjs/graphql';
import { Movie } from '../graphql.schema';
import { MoviesService } from './movies.service';

@Resolver('Movie')
export class MoviesResolver {
  constructor(private readonly moviesService: MoviesService) {}

  @Query()
  async movies(): Promise<Movie[]> {
    return this.moviesService.findAll();
  }
}