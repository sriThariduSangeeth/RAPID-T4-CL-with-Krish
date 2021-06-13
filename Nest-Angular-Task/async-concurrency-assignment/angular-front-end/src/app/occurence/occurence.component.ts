import { Component, OnInit } from '@angular/core';
import { AsyncApiService } from '../services/async-api.service';

@Component({
  selector: 'app-occurence',
  templateUrl: './occurence.component.html',
  styleUrls: ['./occurence.component.css']
})
export class OccurenceComponent implements OnInit {

  paragraph!: string;
  respArray = {};
  type: string = "full";

  constructor(private readonly apiService: AsyncApiService) { }

  ngOnInit(): void {
  }

  submitParagraph(){
   if(this.paragraph){
    this.apiService.findRepititionOfSentence(this.paragraph, this.type)
    .then(res =>{
      if(res[" "]){
        res.space = res[" "];
        delete res[" "];
      }
      this.respArray = res;
    }).catch( error => {
      console.log(error);
      
    });
   }
  }
}
