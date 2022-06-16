import {Component, OnInit, TemplateRef} from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']

})
export class ListCustomerComponent implements OnInit {
  customers: Customer[] = [];
  idDel: number;
  nameDel: string;

  constructor(private  customerService: CustomerService) {

  }

  ngOnInit(): void {
    this.listCustomer()
  }

  listCustomer() {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
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
}
