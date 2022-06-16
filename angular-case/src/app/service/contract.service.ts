import { Injectable } from '@angular/core';
import {Contract} from "../model/contract";
import {Observable} from "rxjs";
import {Customer} from "../model/customer";
import {environment} from "../../environments/environment";
import {HttpClientModule} from "@angular/common/http";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ContractService {
  contracts: Contract [] = [];

  constructor(private http: HttpClientModule) {
    // this.contracts.push({
    //   idContract: 1,
    //   startDateContract: '2020-07-14',
    //   endDateContract: '2020-07-28',
    //   deposit: 3000,
    //   customer: {
    //     id: 4,
    //     codeCustomer: 'KH-0003',
    //     nameCustomer: 'Dương Văn Quan',
    //     dateBirth: '1981-07-08',
    //     gender: 'Nam',
    //     idCard: '543432111',
    //     phone: '0490039241',
    //     email: 'duongquan@gmail.com',
    //     address: 'K453/12 Lê Lợi, Đà Nẵng',
    //     cusType: 'Diamond'
    //   },
    //   service: {
    //     serviceId: 1,
    //     serviceName: 'Villa No Beach Front',
    //     serviceArea: 20200,
    //     serviceCost: 123123,
    //     maxPeople: 5,
    //     standardRoom: 'vip',
    //     descriptionOtherConvenience: 'dọn phòng free',
    //     poolArea: 234,
    //     numberFloor: 1,
    //     rentType: 'year',
    //     svType: 'villa'
    //   },
    // })
    // this.contracts.push({
    //   idContract: 2,
    //   startDateContract: '2022-07-14',
    //   endDateContract: '2022-07-28',
    //   deposit: 8000,
    //   customer: {
    //     id: 1,
    //     codeCustomer: 'KH-0000',
    //     nameCustomer: 'Nguyễn Xuân Tùng',
    //     dateBirth: '2022-05-12',
    //     gender: 'Nam',
    //     idCard: '131234',
    //     phone: '092193123',
    //     email: 'tung@gmail.com',
    //     address: '94 Lê Qunag Đạo',
    //     cusType: 'Platinium'
    //   },
    //   service: {
    //     serviceId: 2,
    //     serviceName: 'Villa Beach Front',
    //     serviceArea: 2000,
    //     serviceCost: 32321,
    //     maxPeople: 10,
    //     standardRoom: 'vip',
    //     descriptionOtherConvenience: 'dọn phòng free',
    //     poolArea: 100,
    //     numberFloor: 20,
    //     rentType: 'day',
    //     svType: 'villa'
    //   },
    // })
    // this.contracts.push({
    //   idContract: 3,
    //   startDateContract: '2021-07-14',
    //   endDateContract: '2021-07-28',
    //   deposit: 2000,
    //   customer: {
    //     id: 2,
    //     codeCustomer: 'KH-0001',
    //     nameCustomer: 'Phạm Xuân Diệu',
    //     dateBirth: '1992-08-08',
    //     gender: 'Nam',
    //     idCard: '865342123',
    //     phone: '0954333333',
    //     email: 'xuandieu92@gmail.com',
    //     address: 'K77/22 Thái Phiên, Quảng Trị',
    //     cusType: 'Gold'
    //   },
    //   service: {
    //     serviceId: 3,
    //     serviceName: 'Villa No Beach Front',
    //     serviceArea: 20200,
    //     serviceCost: 123123,
    //     maxPeople: 5,
    //     standardRoom: 'vip',
    //     descriptionOtherConvenience: 'dọn phòng free',
    //     poolArea: 234,
    //     numberFloor: 1,
    //     rentType: 'year',
    //     svType: 'villa'
    //   },
    // })
    // this.contracts.push({
    //   idContract: 4,
    //   startDateContract: '2019-07-14',
    //   endDateContract: '2020-07-28',
    //   deposit: 5000,
    //   customer: {
    //     id: 3,
    //     codeCustomer: 'KH-0002',
    //     nameCustomer: 'Trương Đình Nghệ',
    //     dateBirth: '1990-02-27',
    //     gender: 'Nam',
    //     idCard: '488645199',
    //     phone: '0373213122',
    //     email: 'nghenhan2702@gmail.com',
    //     address: 'K323/12 Ông Ích Khiêm, Vinh',
    //     cusType: 'Diamond'
    //   },
    //   service: {
    //     serviceId: 4,
    //     serviceName: 'Room Twin 01',
    //     serviceArea: 1100,
    //     serviceCost: 12300,
    //     maxPeople: 100,
    //     standardRoom: 'normal',
    //     descriptionOtherConvenience: 'dọn phòng free',
    //     poolArea: 10,
    //     numberFloor: 2,
    //     rentType: 'day',
    //     svType: 'room'
    //   },
    // })
  }

  // getAll() {
  //  return this.contracts;
  // }
  //
  // saveContract(contract) {
  //   this.contracts.push(contract)
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
}
