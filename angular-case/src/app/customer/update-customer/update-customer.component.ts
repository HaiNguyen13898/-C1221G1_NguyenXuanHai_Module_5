import {Component, OnInit} from '@angular/core';
import {Customer} from "../../model/customer";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CustomerType} from "../../model/customer-type";
import {CustomerTypeService} from "../../service/customer-type.service";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customerForm: FormGroup;
  customerType: CustomerType [] = [];
  id: number;

  equals (item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  };

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id')
      this.customerService.findById(this.id).subscribe(customer => {
        this.customerForm = new FormGroup({
          nameCustomer: new FormControl(customer.nameCustomer),
          id: new FormControl(customer.id),
          codeCustomer: new FormControl(customer.codeCustomer),
          dateBirth: new FormControl(customer.dateBirth),
          gender: new FormControl(customer.gender),
          idCard: new FormControl(customer.idCard),
          phone: new FormControl(customer.phone),
          email: new FormControl(customer.email),
          address: new FormControl(customer.address),
          cusType: new FormControl(customer.cusType),
        })
      });

    })
  }

  ngOnInit(): void {
    this.customerTypeService.getAll().subscribe(customerType => {
      this.customerType = customerType;
    })
  }


  updateCustomer(id: number) {
    const customer = this.customerForm.value;
    this.customerService.updateCustomer(id,customer).subscribe(()=> {
      alert('Cập nhật thành công');
      this.router.navigateByUrl('/customer/list')
    });
    console.log(customer)
  }

}
