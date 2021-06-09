import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.css']
})
export class AnagramComponent implements OnInit {

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
