import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-fibonacci-num',
  templateUrl: './find-fibonacci-num.component.html',
  styleUrls: ['./find-fibonacci-num.component.css']
})
export class FindFibonacciNumComponent implements OnInit {


  fibNumber: number = 0;
  fibIndex: number = 0;

  outFibNumber: any = 0;

  constructor() { }

  ngOnInit(): void {
  }

  genarateSequence(first: string, last: string) {
    console.log(first + "hello" + last);

  }

  calFibonacci() {
    if (this.fibNumber >= 0) {
      this.outFibNumber = this.calculateFibonacci(this.fibNumber);
    } else {
      this.outFibNumber = "Invalid input";

    }

  }

  calIndexOfFibonacci() {
    console.log("hello2" + this.fibIndex);
  }

  calculateFibonacci(intput: number): number {

    let fibonacciArry = new Array(intput + 2);
    fibonacciArry[0] = 0;
    fibonacciArry[1] = 1;
    for (let i = 2; i <= intput; i++) {
      fibonacciArry[i] = fibonacciArry[i - 1] + fibonacciArry[i - 2];
    }
    return fibonacciArry[intput];
  }

  calculateArrayOfFibonacci(first: number, last: number) {

  }
}
