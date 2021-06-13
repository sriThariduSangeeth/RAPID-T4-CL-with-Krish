import { Component, OnInit } from '@angular/core';
import { AsyncApiService } from '../services/async-api.service';

@Component({
  selector: 'app-occurence',
  templateUrl: './occurence.component.html',
  styleUrls: ['./occurence.component.css']
})
export class OccurenceComponent implements OnInit {

  paragraph!: string;
  respArray!:any;
  type: string = "summer";

  constructor(private readonly apiService: AsyncApiService) { }

  ngOnInit(): void {
  }

  submitParagraph(){
   if(this.paragraph){
    this.apiService.findRepititionOfSentence(this.paragraph, this.type)
    .then(res =>{
      this.respArray = res;
        console.log(res);
        
    }).catch( error => {
      console.log(error);
      
    });
   }
  }
}
