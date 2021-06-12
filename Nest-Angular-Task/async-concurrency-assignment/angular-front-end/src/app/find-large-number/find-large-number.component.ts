import { Component, OnInit } from '@angular/core';
import { AsyncApiService } from '../services/async-api.service';

@Component({
  selector: 'app-find-large-number',
  templateUrl: './find-large-number.component.html',
  styleUrls: ['./find-large-number.component.css']
})
export class FindLargeNumberComponent implements OnInit {

  constructor(private readonly apiService: AsyncApiService) { }

  ngOnInit(): void {
    const res = this.apiService.findLargeNumber({numberArray: [23,  24,  45, 51,  61, 72,  80,  81, 85, 102, 111, 116, 117], indexOfNumber: 4}).subscribe(res =>{
      console.log(res);
      
    },
    error =>{
      console.log(error);
    }
    );
  }

}
