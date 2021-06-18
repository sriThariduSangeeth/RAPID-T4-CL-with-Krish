import { Animal } from "src/entities/animal.entity";
import { Repository } from "typeorm";

export class PetsRepository extends Repository<Animal>{

    public updatePetById(id: number , animal : Animal): Promise<any>{
        // return this.getConnection().createQueryBuilder().update(Animal).set({name: "Timber"}).where("id = :id", { id: animal.id }).execute();
        return this.update({id: animal.id} , animal);
    }

}