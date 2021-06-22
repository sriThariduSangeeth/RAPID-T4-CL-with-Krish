import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/services/animal.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-display-pets',
  templateUrl: './display.pets.component.html',
  styleUrls: ['./display.pets.component.css']
})
export class DisplayPetsComponent implements OnInit , AfterViewInit{

  dataSource = new MatTableDataSource<Animal>();
  displayedColumns: string[] = ['name', 'type', 'birthDay','lastVacDate','nextVacDate', 'edit', 'delete'];

  constructor(private readonly animalService : AnimalService , public router: Router){
  }

  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
    this.getAllAnimalData();
  }


  getAllAnimalData(first?: number, offset?: number, last?: number) {
    this.animalService.getAllAnimal().then(
      res =>{
        this.dataSource.data = res;
      }).catch( error =>{

    })
    
  }

  editVehicle(animal : Animal){

  }
  
  deleteVehicle(animal : Animal){

  }

  addNewPet(){
    this.router.navigate(['add']);
  }
 
  

}
