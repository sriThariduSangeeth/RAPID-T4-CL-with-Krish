import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Animal } from 'src/entities/animal.entity';
import { PetsRepository } from './pets.repository';

@Injectable()
export class PetsService {

    constructor(
        @InjectRepository(Animal) private petRepository :PetsRepository){}

    async getAllAnimal(): Promise<Animal[]> {
        return this.petRepository.find();
    }

    async getAnimalById(id:number):Promise<Animal>{
        return this.petRepository.findOne({id:id});
    }

    async addNewAnimal(animal : Animal): Promise<Animal>{
        return this.petRepository.save(animal);
    }

    async updateAnimal(animal : Animal): Promise<any>{
        return this.petRepository.updatePetById(animal.id , animal);
    }

    async deleteAnimal(id: number): Promise<any>{
        return this.petRepository.delete({id: id});
    }

}
