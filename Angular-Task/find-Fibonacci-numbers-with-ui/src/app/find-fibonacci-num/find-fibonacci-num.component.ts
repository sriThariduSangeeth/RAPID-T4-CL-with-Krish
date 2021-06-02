import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-fibonacci-num',
  templateUrl: './find-fibonacci-num.component.html',
  styleUrls: ['./find-fibonacci-num.component.css']
})
export class FindFibonacciNumComponent implements OnInit {


  arrFirst: number = 0;
  arrLast: number = 0;
  fibNumber: number = 0;
  fibIndex: number = 0;

  outFibNumber: any = 0;
  outFibIndex: any = 0;
  outFibMAp = new Array<number>();
  indexRes: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  genarateSequence(first: string, last: string) {
    this.arrFirst = +first;
    this.arrLast = +last;
    this.outFibMAp.push(...this.calculateArrayOfFibonacci(this.arrFirst, this.arrLast));
  }

  calFibonacci() {
    if (this.fibNumber >= 0) {
      this.outFibNumber = this.calculateFibonacci(this.fibNumber);
    } else {
      this.outFibNumber = "Invalid input";

    }

  }

  calIndexOfFibonacci() {
    if (this.isFibonacci(this.fibIndex)) {
      console.log(this.isFibonacci(this.fibIndex));
      this.indexRes = true;
      this.outFibIndex = this.calculateIndexOfFibonacci(this.fibIndex);
    } else {
      this.indexRes = false;
      this.outFibIndex = "Invalid input. This is not Fibonacci Nmber";
    }


  }

  calculateFibonacci(intput: number): number {

    // let fibonacciArry = new Array(intput + 2);
    // fibonacciArry[0] = 0;
    // fibonacciArry[1] = 1;
    // for (let i = 2; i <= intput; i++) {
    //   console.log(fibonacciArry[i]);

    //   fibonacciArry[i] = fibonacciArry[i - 1] + fibonacciArry[i - 2];
    //   console.log(fibonacciArry[i]);
    // }
    // return fibonacciArry[intput];

    if (intput <= 1)
      return intput;

    return this.calculateFibonacci(intput - 1) + this.calculateFibonacci(intput - 2);
  }

  calculateIndexOfFibonacci(input: number): number {

    let result = 1;
    let fib1 = 0;
    let fib2 = 1;
    let fib3 = 1;

    if (this.fibIndex <= 1) {
      return this.fibIndex;
    }

    while (fib3 < input) {
      fib3 = fib1 + fib2;
      result++;
      fib1 = fib2;
      fib2 = fib3;
    }
    return result;
  }

  isFibonacci(input: number) {
    let firstTerm = 0;
    let secondTerm = 1;
    let thirdTerm = 0;
    while (thirdTerm < input) {
      thirdTerm = firstTerm + secondTerm;
      firstTerm = secondTerm;
      secondTerm = thirdTerm;
    }
    if (thirdTerm == input) {
      return true;
    }
    return false;
  }

  /**
   * //TODO
   * @param first 
   * @param last 
   * @returns 
   */
  calculateArrayOfFibonacci(first: number, last: number): number[] {
    let fibonacciArry = new Array();

    for (let i = first; i <= last; i++) {
      fibonacciArry.push(this.calculateFibonacci(i));
    }
    return fibonacciArry;
  }


}
