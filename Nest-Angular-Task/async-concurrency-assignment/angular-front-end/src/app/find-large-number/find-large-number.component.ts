import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AsyncApiService } from '../services/async-api.service';

@Component({
  selector: 'app-find-large-number',
  templateUrl: './find-large-number.component.html',
  styleUrls: ['./find-large-number.component.css']
})
export class FindLargeNumberComponent implements OnInit {

  numberArray:string = "";
  indexOfArray!: number;

  resArray : Array<number> = [];
  resNumber !: number;

  submitFlag : boolean = false;


  constructor(private readonly apiService: AsyncApiService) { }

  ngOnInit(): void {
    
  }

  onArrayChange(value : string){
    this.submitFlag = false;
    
  }

  onIndexChange(value: number){
    this.submitFlag = false;
  }

  submitArray = () =>{
    const arr: Array<number> = this.numberArray.split(',').map(x => parseInt(x));
    // [23,  24,  45, 51,  61, 72,  80,  81, 85, 102, 111, 116, 117]

    this.apiService.findLargeNumber({numberArray: arr, indexOfNumber: this.indexOfArray}).subscribe( res =>{
      this.resArray = res.sortedArray;
      this.resNumber = res.number;
      this.submitFlag = true;
    },
    error =>{
      console.log(error.error.message);
      this.submitFlag = false;
    }
    );
  }

}
