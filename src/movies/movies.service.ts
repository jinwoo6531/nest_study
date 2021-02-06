import { CreateMovieDto } from './dto/create-movie.dto';
import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    return this.movies.find((movie) => movie.id === +id);
  }

  create(createMovieDto: CreateMovieDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...createMovieDto,
    });
  }
}
