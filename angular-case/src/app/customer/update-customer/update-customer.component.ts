import {Component, OnInit} from '@angular/core';
import {Customer} from "../../model/customer";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customerForm: FormGroup;
  id: number;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const customer = this.customerService.findById(Number(paramMap.get('idCustomer')));
      this.customerForm = new FormGroup({
        nameCustomer: new FormControl(customer.nameCustomer),
        idCustomer: new FormControl(customer.idCustomer),
        codeCustomer: new FormControl(customer.codeCustomer),
        dateBirth: new FormControl(customer.dateBirth),
        gender: new FormControl(customer.gender),
        idCard: new FormControl(customer.idCard),
        phone: new FormControl(customer.phone),
        email: new FormControl(customer.email),
        address: new FormControl(customer.address),
        cusType: new FormControl(customer.cusType),
      })
    })
  }

  ngOnInit(): void {

  }

  // private getCustomer(id: number) {
  //  return  this.customerService.findById(id);
  // }

  updateCustomer() {
    const customer = this.customerForm.value;
    this.customerService.updateCustomer( customer);
    alert('Cập nhật thành công');
    this.router.navigateByUrl('customer')
    console.log(customer)
  }

}
