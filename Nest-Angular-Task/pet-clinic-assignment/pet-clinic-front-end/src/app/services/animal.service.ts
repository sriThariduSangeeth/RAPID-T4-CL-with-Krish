import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Animal } from "../models/animal";

@Injectable({
    providedIn: 'root'
})
export class AnimalService {

    SERVER_URL: string = environment.apiUrl;
    
    constructor(private httpClient: HttpClient) { }

    public getAllAnimal():Promise<Animal[]>{
        return this.httpClient.get<Animal[]>(`${this.SERVER_URL}`).toPromise();
    }

    public addNewAnimal(animal: Animal) : Promise<Animal>{
        return this.httpClient.post<Animal>(`${this.SERVER_URL}`, animal).toPromise();
    }
    
}