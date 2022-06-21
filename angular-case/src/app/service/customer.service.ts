import {Injectable} from '@angular/core';
import {Customer} from "../model/customer";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  // customers: Customer[] = [];

  constructor(private http: HttpClient) {
    // this.customers.push({
    //   id: 1,
    //   codeCustomer: 'KH-0000',
    //   nameCustomer: 'Nguyễn Xuân Tùng',
    //   dateBirth: '2022-05-12',
    //   gender: 'Nam',
    //   idCard: '131234',
    //   phone: '092193123',
    //   email: 'tung@gmail.com',
    //   address: '94 Lê Qunag Đạo',
    //   cusType: 'Platinium'
    // })
    // this.customers.push({
    //   id: 2,
    //   codeCustomer: 'KH-0001',
    //   nameCustomer: 'Phạm Xuân Diệu',
    //   dateBirth: '1992-08-08',
    //   gender: 'Nam',
    //   idCard: '865342123',
    //   phone: '0954333333',
    //   email: 'xuandieu92@gmail.com',
    //   address: 'K77/22 Thái Phiên, Quảng Trị',
    //   cusType: 'Gold'
    // })
    // this.customers.push({
    //   id: 3,
    //   codeCustomer: 'KH-0002',
    //   nameCustomer: 'Trương Đình Nghệ',
    //   dateBirth: '1990-02-27',
    //   gender: 'Nam',
    //   idCard: '488645199',
    //   phone: '0373213122',
    //   email: 'nghenhan2702@gmail.com',
    //   address: 'K323/12 Ông Ích Khiêm, Vinh',
    //   cusType: 'Diamond'
    // })
    // this.customers.push({
    //   id: 4,
    //   codeCustomer: 'KH-0003',
    //   nameCustomer: 'Dương Văn Quan',
    //   dateBirth: '1981-07-08',
    //   gender: 'Nam',
    //   idCard: '543432111',
    //   phone: '0490039241',
    //   email: 'duongquan@gmail.com',
    //   address: 'K453/12 Lê Lợi, Đà Nẵng',
    //   cusType: 'Diamond'
    // })
  }

  // getAll() {
  //   return this.customers;
  // }
  //
  // saveCustomer(customer) {
  //   this.customers.push(customer)
  // }
  //
  // findById(id: number) {
  //   for (let customer of this.customers) {
  //     if(customer.id == id ) {
  //       return customer
  //     }
  //   }
  // }
  // updateCustomer ( customer: Customer) {
  //   for (let i = 0; i < this.customers.length; i++) {
  //     if (this.customers[i].id == customer.id) {
  //       this.customers[i] = customer;
  //     }
  //   }
  // }


  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(API_URL + '/customers');
  }

  saveCustomer(customer): Observable<Customer> {
    return this.http.post<Customer>(API_URL + '/customers', customer);
  }

  findById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${API_URL}/customers/${id}`);
  }

  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${API_URL}/customers/${id}`, customer);
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.http.delete<Customer>(`${API_URL}/customers/${id}`);
  }
  searchCustomer(name: string, code: string): Observable<Customer> {
    return this.http.get<Customer>(`${API_URL}/customers?name_like=${name}&codeCustomer_like=${code}`);
  }
}
