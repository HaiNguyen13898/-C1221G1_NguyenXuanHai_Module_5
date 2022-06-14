import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  createCustomerForm: FormGroup;

  constructor() {
    this.createCustomerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      codeCustomer: new FormControl('', [Validators.pattern('^KH-\\d{4}$')]),
      dateBirth: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.pattern('^\\d{9}$')]),
      phone: new FormControl('', [Validators.pattern('^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$')]),
      email: new FormControl('', [Validators.pattern('^\\w+([.-]?\\w+)*@[a-z]+\\.(\\w+){2,}(\\.\\w{2,3})?')]),
      address: new FormControl(),
      cusType: new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  createCustomer () {

  }

}
