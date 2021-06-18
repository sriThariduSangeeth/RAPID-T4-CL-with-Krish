import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animal } from 'src/entities/animal.entity';
import { PetsController } from './pets.controller';
import { PetsService } from './pets.service';

@Module({
  imports:[TypeOrmModule.forFeature([Animal])],
  controllers: [PetsController],
  providers: [PetsService]
})
export class PetsModule {}
