import { Component, OnInit } from '@angular/core';
import { AsyncApiService } from '../services/async-api.service';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.css']
})
export class AnagramComponent implements OnInit {

  arrFirst: string = "";
  arrSecond: string = "";
  response: boolean = false;

  constructor(private readonly apiService : AsyncApiService) { }

  ngOnInit(): void {
    
  }

  submitWords(firstWord: string , secondWord: string) {
    
    this.arrFirst = firstWord;
    this.arrSecond = secondWord;

    this.apiService.findAnagram({firstWord: firstWord , secondWord: secondWord}).then( res =>{
      this.response = res

    }).catch(error =>{
      console.log(error);
      
    });
    
    
  }

}
