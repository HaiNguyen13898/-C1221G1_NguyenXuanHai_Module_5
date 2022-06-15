import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCustomerComponent} from "../customer/list-customer/list-customer.component";
import {CreateCustomerComponent} from "../customer/create-customer/create-customer.component";
import {UpdateCustomerComponent} from "../customer/update-customer/update-customer.component";


const routes: Routes = [
  {path: 'customer', component: ListCustomerComponent},
  {path: 'create-customer', component: CreateCustomerComponent},
  {path: 'update-customer/:idCustomer', component: UpdateCustomerComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
