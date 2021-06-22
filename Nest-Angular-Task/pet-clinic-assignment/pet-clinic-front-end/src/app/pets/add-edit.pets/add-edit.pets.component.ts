import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-add-edit-pets',
  templateUrl: './add-edit.pets.component.html',
  styleUrls: ['./add-edit.pets.component.css']
})
export class AddEditPetsComponent implements OnInit {

  afname!:string;
  ptype!:string;
  pbreed!:string;
  astartdate!:string;
  lastcavdate!:string;
  nextcavdate!:string;
  today: number = Date.now();

  edit_input: boolean = false;

  constructor(private readonly animalservice: AnimalService){}

  ngOnInit(): void {
  }

  submit(){
    const animalObj: Animal ={
      name : this.afname,
      type : this.ptype,
      birthDay : this.astartdate,
      breed : this.pbreed,
      lastVacDate : this.lastcavdate,
      nextVacDate : this.nextcavdate
    }
    this.animalservice.addNewAnimal(animalObj).then( res =>{
      console.log("success" , res);
      
    }).catch( error =>{
      console.log("error" , error);
    });
  }

 

  onChange(){

  }
  
}
