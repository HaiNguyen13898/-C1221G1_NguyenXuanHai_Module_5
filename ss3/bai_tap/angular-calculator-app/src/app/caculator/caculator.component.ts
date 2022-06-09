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
  caculator(num1, num2, result) {

  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
