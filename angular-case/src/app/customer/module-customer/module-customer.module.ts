import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ModuleCustomerRoutingModule} from './module-customer-routing.module';
import {ListCustomerComponent} from "../list-customer/list-customer.component";
import {CreateCustomerComponent} from "../create-customer/create-customer.component";
import {UpdateCustomerComponent} from "../update-customer/update-customer.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListCustomerComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent
  ],
  imports: [
    CommonModule,
    ModuleCustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ModuleCustomerModule {
}
