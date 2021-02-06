import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import {
  Controller,
  Delete,
  Get,
  Post,
  Param,
  Put,
  Patch,
  Body,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  constructor(private movieService: MoviesService) {}

  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie made after: ${searchingYear}`;
  }

  //@Param을 통해 url의 id값을 불러올수있다.
  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `This will return one movie ${id}`;
  }

  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.movieService.create(createMovieDto);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie whit the id : ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}
