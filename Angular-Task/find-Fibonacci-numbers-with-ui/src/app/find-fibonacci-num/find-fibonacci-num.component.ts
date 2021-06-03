import { Component, OnInit } from '@angular/core';
import { FibonacciNum } from '../model/fibonacci';

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
  outFibMAp = new Array<FibonacciNum>();
  indexRes: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  genarateSequence(first: string, last: string) {
    this.outFibMAp = [];
    this.arrFirst = +first;
    this.arrLast = +last;
    if (this.arrFirst < this.arrLast) {
      //use method destructuring...
      this.outFibMAp = [...this.calculateArrayOfFibonacci(this.arrFirst, this.arrLast)];
    } else {
      window.alert("Invalid Input !");
      this.arrFirst = 0;
      this.arrLast = 0;
    }

  }

  calFibonacci() {
    if (this.fibNumber >= 0) {
      this.outFibNumber = this.calculateFibonacci(this.fibNumber);
    } else {
      this.outFibNumber = "Invalid input";

    }

  }

  calIndexOfFibonacci() {
    let res = this.calculateIndexOfFibonacci(this.fibIndex);
    if (res.fib == this.fibIndex) {
      this.indexRes = true;
      this.outFibIndex = res.index;
    } else {
      this.indexRes = false;
      this.outFibIndex = "Invalid input. This is not Fibonacci Nmber";
    }
  }

  /**
   * 
   * @param intput Index of fib
   * @returns Fibonacci number
   */
  calculateFibonacci(intput: number): number {

    let fibonacciArry = new Array(intput + 2);
    fibonacciArry[0] = 0;
    fibonacciArry[1] = 1;
    for (let i = 2; i <= intput; i++) {
      fibonacciArry[i] = fibonacciArry[i - 1] + fibonacciArry[i - 2];
    }
    return fibonacciArry[intput];

    /**
    if (intput <= 1) {
      return intput;
    }
    //this method recurrence will create recursion tree
    //this is a bad implementation
    return this.calculateFibonacci(intput - 1) + this.calculateFibonacci(intput - 2);
     */
  }

  /**
   * 
   * @param input FibonacciNumber 
   * @returns index of fib
   */
  calculateIndexOfFibonacci(input: number): FibonacciNum {

    let result = 1;
    let firstTerm = 0;
    let secondTerm = 1;
    let thirdTerm = 1;

    if (input <= 1) {
      return new FibonacciNum(input, input);
    }

    while (thirdTerm < input) {
      thirdTerm = firstTerm + secondTerm;
      //use method destructuring...To swap veriables.
      [firstTerm, secondTerm] = [secondTerm, thirdTerm];
      result++;
    }

    return new FibonacciNum(thirdTerm, result);
  }


  /**
   * //TODO
   * @param first 
   * @param last 
   * @returns 
   */
  calculateArrayOfFibonacci(first: number, last: number): FibonacciNum[] {
    let fibonacciArry = new Array<FibonacciNum>();

    for (let i = first; i <= last; i++) {
      fibonacciArry.push(new FibonacciNum(this.calculateFibonacci(i), i));
    }
    return fibonacciArry;
  }


}
