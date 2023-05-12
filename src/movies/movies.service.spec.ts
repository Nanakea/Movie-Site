import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './movie.entity';

describe('MoviesService', () => {
  let service: MoviesService;
  let repository: Repository<Movie>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MoviesService,
        {
          provide: getRepositoryToken(Movie),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
    repository = module.get<Repository<Movie>>(getRepositoryToken(Movie));
  });

  describe('findAll', () => {
    it('should return an array of movies', async () => {
      const movies: Movie[] = [
        {
          id: 1,
          title: 'Movie 1',
          director: 'Director 1',
          year: 2021,
          genre: 'Action',
          favoriteUsers: [],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          title: 'Movie 2',
          director: 'Director 2',
          year: 1995,
          genre: 'Sci-fi',
          favoriteUsers: [],
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ];
      jest.spyOn(repository, 'find').mockResolvedValue(movies);

      const result = await service.findAll();

      expect(result).toEqual(movies);
    });
  });

  describe('findOne', () => {
    it('should return a movie by id', async () => {
      const movie: Movie =        
      {
        id: 1,
        title: 'Movie 1',
        director: 'Director 1',
        year: 2021,
        genre: 'Action',
        favoriteUsers: [],
        createdAt: new Date(),
        updatedAt: new Date()
      }
      jest.spyOn(repository, 'findOne').mockResolvedValue(movie);

      const result = await service.findById(1);

      expect(repository.findOne).toHaveBeenCalledWith(1);
      expect(result).toEqual(movie);
    });

    it('should return null if movie is not found', async () => {
      jest.spyOn(repository, 'findOne').mockResolvedValue(null);

      const result = await service.findById(1);

      expect(repository.findOne).toHaveBeenCalledWith(1);
      expect(result).toBeNull();
    });
  });

  describe('create', () => {
    it('should create a new movie', async () => {
      const movieDto = { title: 'New Movie', director: 'Director', year: 2023 };
      const createdMovie: Movie = {
        id: 1,
        title: 'Movie 1',
        director: 'Director 1',
        year: 2021,
        genre: 'Action',
        favoriteUsers: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      jest.spyOn(repository, 'save').mockResolvedValue(createdMovie);

      const result = await service.create(movieDto);

      expect(repository.save).toHaveBeenCalledWith(movieDto);
      expect(result).toEqual(createdMovie);
    });
  });

  describe('update', () => {
    it('should update a movie', async () => {
      const existingMovie: Movie = {
        id: 1,
        title: 'Movie 1',
        director: 'Director 1',
        year: 2021,
        genre: 'Action',
        favoriteUsers: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const updateDto = { title: 'Updated Movie', director: 'Updated Director', year: 2022 };
      jest.spyOn(repository, 'findOne').mockResolvedValue(existingMovie);
      jest.spyOn(repository, 'save').mockResolvedValue({ ...existingMovie, ...updateDto });

      const result = await service.update(1, updateDto);

      expect(repository.findOne).toHaveBeenCalledWith(1);
      expect(repository.save).toHaveBeenCalledWith({ ...existingMovie, ...updateDto });
      expect(result).toEqual({ ...existingMovie, ...updateDto });
    });

    it('should return null if movie is not found', async () => {
      const updateDto = { title: 'Updated Movie', director: 'Updated Director', year: 2022 };
      jest.spyOn(repository, 'findOne').mockResolvedValue(null);

      const result = await service.update(1, updateDto);

      expect(repository.findOne).toHaveBeenCalledWith(1);
      expect(result).toBeNull();
    });
  });

  describe('delete', () => {
    it('should delete a movie', async () => {
    const movie: Movie = {
      id: 1,
      title: 'Movie 1',
      director: 'Director 1',
      year: 2021,
      genre: 'Action',
      favoriteUsers: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    jest.spyOn(repository, 'findOne').mockResolvedValue(movie);
    jest.spyOn(repository, 'remove').mockResolvedValue(movie);
    const result = await service.delete(1);

    expect(repository.findOne).toHaveBeenCalledWith(1);
    expect(repository.remove).toHaveBeenCalledWith(movie);
    expect(result).toEqual(movie);
  });

  it('should return null if movie is not found', async () => {
    jest.spyOn(repository, 'findOne').mockResolvedValue(null);

    const result = await service.delete(1);

    expect(repository.findOne).toHaveBeenCalledWith(1);
    expect(result).toBeNull();
    });
  });
});
