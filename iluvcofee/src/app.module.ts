import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CofeesController } from './cofees/cofees.controller';
import { CofeesService } from './cofees/cofees.service';

@Module({
  imports: [],
  controllers: [AppController, CofeesController],
  providers: [AppService, CofeesService],
})
export class AppModule {}
