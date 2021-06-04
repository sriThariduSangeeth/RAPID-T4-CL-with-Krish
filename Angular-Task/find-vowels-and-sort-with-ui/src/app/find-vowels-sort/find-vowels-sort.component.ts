import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-vowels-sort',
  templateUrl: './find-vowels-sort.component.html',
  styleUrls: ['./find-vowels-sort.component.css']
})
export class FindVowelsSortComponent implements OnInit {

  paragraph: string = "";
  respArray: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  submitParagraph() {
    const regex = new RegExp(/[aeiou]/i);
    // we can do this as one line code in ES6
    this.respArray = [...this.paragraph.split(/[ ,.]+/).filter(word => regex.test(word)).sort()];
  }

}
