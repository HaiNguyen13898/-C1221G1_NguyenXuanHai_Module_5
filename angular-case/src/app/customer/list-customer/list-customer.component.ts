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
    this.customers = this.customerService.getAll()
  }


  inforCustomer(id: number, name: string) {
     this.idDel= id;
     this.nameDel= name;
  }

  deleteCustomer(id: number) {
    for (let i = 0; i < this.customers.length; i++) {
      if(this.customers[i].idCustomer == id) {
        this.customers.splice(i, 1)
      }
    }
  }
}
