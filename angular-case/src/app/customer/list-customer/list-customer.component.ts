import {Component, OnInit, TemplateRef} from '@angular/core';
import {Customer} from "../../model/customer";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']

})
export class ListCustomerComponent implements OnInit {
  customers: Customer[] = [];

  constructor() {
    this.customers.push({
      idCustomer: 1,
      codeCustomer: 'KH-0000',
      nameCustomer: 'Nguyễn Xuân Tùng',
      dateBirth: '2022-05-12',
      gender: 'Nam',
      idCard: '131234',
      phone: '092193123',
      email: 'tung@gmail.com',
      address: '94 Lê Qunag Đạo',
      cusType: 'Platinium'
    })
    this.customers.push({
      idCustomer: 2,
      codeCustomer: 'KH-0001',
      nameCustomer: 'Phạm Xuân Diệu',
      dateBirth: '1992-08-08',
      gender: 'Nam',
      idCard: '865342123',
      phone: '0954333333',
      email: 'xuandieu92@gmail.com',
      address: 'K77/22 Thái Phiên, Quảng Trị',
      cusType: 'Gold'
    })
    this.customers.push({
      idCustomer: 3,
      codeCustomer: 'KH-0002',
      nameCustomer: 'Trương Đình Nghệ',
      dateBirth: '1990-02-27',
      gender: 'Nam',
      idCard: '488645199',
      phone: '0373213122',
      email: 'nghenhan2702@gmail.com',
      address: 'K323/12 Ông Ích Khiêm, Vinh',
      cusType: 'Diamond'
    })
    this.customers.push({
      idCustomer: 4,
      codeCustomer: 'KH-0003',
      nameCustomer: 'Dương Văn Quan',
      dateBirth: '1981-07-08',
      gender: 'Nam',
      idCard: '543432111',
      phone: '0490039241',
      email: 'duongquan@gmail.com',
      address: 'K453/12 Lê Lợi, Đà Nẵng',
      cusType: 'Diamond'
    })
  }

  ngOnInit(): void {
  }


  deleteCustomer() {

  }


}
