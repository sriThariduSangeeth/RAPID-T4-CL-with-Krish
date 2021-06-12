import { Module } from '@nestjs/common';
import { AppController } from './async-app/app.controller';
import { AppService } from './async-app/app.service';
import { QuickSort } from './common/quick-sort';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService , QuickSort],
})
export class AppModule {}
