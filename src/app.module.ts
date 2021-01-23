import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController], //controller는 nodejs의 express와 같은 존재
  providers: [AppService],
})
export class AppModule {}
