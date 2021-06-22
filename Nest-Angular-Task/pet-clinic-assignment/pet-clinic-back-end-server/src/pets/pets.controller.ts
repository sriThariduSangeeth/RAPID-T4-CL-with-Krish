import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { Animal } from 'src/entities/animal.entity';
import { PetsService } from './pets.service';

@Controller('pets')
export class PetsController {

    constructor(private readonly petService: PetsService) {}

    @Post()
    public addNewAnimal(@Body() animal : Animal): Promise<Animal>{
        return this.petService.addNewAnimal(animal);
    }

    @Put()
    public editAnimal(@Body() animal : Animal): Promise<Animal>{
        console.log(animal);
        
        return this.petService.updateAnimal(animal);
    }

    @Delete(':id')
    public deleteAnimal(@Param('id') id : string): Promise<Animal>{
        return this.petService.deleteAnimal(id);
    }

    @Get()
    public getAllAnimals(): Promise<Animal[]>{
        return this.petService.getAllAnimal();
    }

    @Get(':id')
    public getAnimalById(@Param('id') id: string): Promise<Animal>{
        return this.petService.getAnimalById(id);
    }
}
