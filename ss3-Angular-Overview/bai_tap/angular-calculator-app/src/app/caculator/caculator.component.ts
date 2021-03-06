import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {
  num1: number;
  num2: number;
  result: string;

  changeValue(num) {
    this.num1 = num;
  }
  caculator(a: string) {
    switch (a) {
      case 'Addition(+)' :
        this.result = String(this.num1 + this.num2);
        break;
      case 'Subtraction(-)' :
        this.result = String(this.num1 - this.num2);
        break;
      case 'Multiplication(x)' :
        this.result = String(this.num1 * this.num2);
        break;
      case 'Division(/)' :
         if (this.num2 === 0) {
          this.result = 'Mẫu số không được bằng 0';
        } else if (this.num2 !== 0) {
           this.result = String(this.num1 / this.num2);
         }
    }
  }

  // add() {
  //   this.result = String(this.num1 + this.num2);
  // }
  // sub() {
  //   this.result = String(this.num1 - this.num2);
  // }
  // mul() {
  //   this.result = String(this.num1 * this.num2);
  // }
  // div() {
  //    if (this.num2 === 0) {
  //     this.result = 'Mẫu số không được bằng 0';
  //   } else if (this.num2 !== 0) {
  //      this.result = String(this.num1 / this.num2);
  //    }
  // }
  constructor() {
  }

  ngOnInit(): void {
  }

}
