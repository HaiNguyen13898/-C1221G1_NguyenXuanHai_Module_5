import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomerRoutingModule} from './customer-routing.module';
import {ListCustomerComponent} from "../customer/list-customer/list-customer.component";
import {CreateCustomerComponent} from "../customer/create-customer/create-customer.component";
import {UpdateCustomerComponent} from "../customer/update-customer/update-customer.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListCustomerComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule {
}
