import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [],
  controllers: [MoviesController], //controller는 nodejs의 express와 같은 존재
  providers: [],
})
export class AppModule {}
