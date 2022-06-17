import {Component, OnInit, TemplateRef} from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer.service";
import {CustomerType} from "../../model/customer-type";
import {CustomerTypeService} from "../../service/customer-type.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']

})
export class ListCustomerComponent implements OnInit {
  customers: Customer[] = [];
  customerType: CustomerType [] = [];
  idDel: number;
  nameDel: string;
  p: string | number;
  searchForm: FormGroup;

  name: string;
  code: string;


  constructor(private  customerService: CustomerService,
              private customerTypeService: CustomerTypeService) {
    this.searchForm = new FormGroup({
      nameCustomer: new FormControl(),
      codeCustomer: new FormControl(),
    })

  }

  ngOnInit(): void {
   this.listCustomer()
  }

  listCustomer() {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    })
    this.customerTypeService.getAll().subscribe(customerType => {
      this.customerType = customerType;
    })
  }



  inforCustomer(id: number, name: string) {
    this.idDel = id;
    this.nameDel = name;
  }

  deleteCustomer(id: number) {
    // for (let i = 0; i < this.customers.length; i++) {
    //   if (this.customers[i].id == id) {
    //     this.customers.splice(i, 1)
    //   }
    // }
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.ngOnInit()
    })
  }

  search() {
    this.customerService.searchCustomer(this.name, this.code).subscribe(() => {
    })
  }
}
