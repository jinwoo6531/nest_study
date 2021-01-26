import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  //리스트 출력
  getAll(): Movie[] {
    return this.movies;
  }

  //id값 하나 가져오기
  getOne(id: string): Movie {
    const movie = this.movies.find((movie) => movie.id === +id);
    if (!movie) {
      throw new NotFoundException(`Movie whit ID ${id} not found`);
    }
    return movie;
  }

  //삭제
  deleteOne(id: string) {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== +id);
  }

  //생성
  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  //수정
  update(id: string, updateData) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...movie, ...updateData });
  }
}
