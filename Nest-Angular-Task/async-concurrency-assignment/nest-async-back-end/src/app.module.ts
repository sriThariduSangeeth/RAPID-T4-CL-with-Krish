import { Module } from '@nestjs/common';
import { AppController } from './async-app/app.controller';
import { AppService } from './async-app/app.service';
import { AnagramService } from './async-service-helper/anagram.service';
import { LargeNumberService } from './async-service-helper/large-number.service';
import { RepititionService } from './async-service-helper/repitition.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
