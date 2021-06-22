import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
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

  dialogConfigs!: MatDialogConfig;

  petId:string = "";
  afname!:string;
  ptype!:string;
  pbreed!:string;
  astartdate!:string;
  lastcavdate!:string;
  nextcavdate!:string;
  today: number = Date.now();

  edit_input: boolean = false;

  constructor(@Optional() public dialogRef: MatDialogRef<AddEditPetsComponent>,private readonly animalservice: AnimalService){}

  ngOnInit(): void {
    console.log(this.dialogConfigs.id);
    console.log(this.dialogConfigs.data);
    this.setValue(this.dialogConfigs.data);
    
  }

  setValue(data : Animal){

    this.petId = data.id!;
    this.afname = data.name;
    this.ptype = data.type;
    this.pbreed = data.breed;
    this.astartdate = data.birthDay;
    this.lastcavdate = data.lastVacDate;
    this.nextcavdate = data.nextVacDate;
  }

  submit(){
    const animalObj: Animal ={
      id: this.petId,
      name : this.afname,
      type : this.ptype,
      birthDay : this.astartdate,
      breed : this.pbreed,
      lastVacDate : this.lastcavdate,
      nextVacDate : this.nextcavdate
    }
    if(this.dialogConfigs.id == "Edit"){
      this.animalservice.editAnimal(animalObj).then( res =>{
        this.dialogRef.close();
      }).catch( err =>{
console.log(err);

      })
    }else{
      this.animalservice.addNewAnimal(animalObj).then( res =>{
        console.log("success" , res);
        
      }).catch( error =>{
        console.log("error" , error);
      });
    }
    
  }

 

  onChange(){

  }
  
}
