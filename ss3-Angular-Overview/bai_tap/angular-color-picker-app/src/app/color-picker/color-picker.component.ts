import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {


  color: string;

  changeColor(value) {
    this.color = value;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
