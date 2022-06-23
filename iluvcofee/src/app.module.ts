import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CofeesController } from './cofees/cofees.controller';

@Module({
  imports: [],
  controllers: [AppController, CofeesController],
  providers: [AppService],
})
export class AppModule {}
