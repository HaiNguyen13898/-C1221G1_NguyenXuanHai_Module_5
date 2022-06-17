import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";
import {Router} from "@angular/router";
import {CustomerTypeService} from "../../service/customer-type.service";
import {CustomerType} from "../../model/customer-type";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  createCustomerForm: FormGroup;
  customerType: CustomerType [] = [];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService ,private router: Router) {
    this.createCustomerForm = new FormGroup({
      id: new FormControl(),
      nameCustomer: new FormControl('', [Validators.required]),
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
    this.customerTypeService.getAll().subscribe(customerType => {
      this.customerType = customerType;
    })
  }

  createCustomer() {
    if(this.createCustomerForm.valid) {
      const customer = this.createCustomerForm.value;
      this.customerService.saveCustomer(customer).subscribe(() => {
        this.createCustomerForm.reset();
        this.router.navigateByUrl('customer/list');
        alert('Tạo mới thành công')
      })
    }
  }


  // if(this.createCustomerForm.valid){
  //   const customer = this.createCustomerForm.value;
  //   this.customerService.saveCustomer(customer);
  //   this.createCustomerForm.reset();
  //   alert('Đã thêm mới thành công')
  //   this.router.navigateByUrl('customer')
  // }

}


