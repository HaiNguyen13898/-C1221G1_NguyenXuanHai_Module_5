import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CreateCustomerComponent} from "./customer/create-customer/create-customer.component";
import {CreateContractComponent} from "./contract/create-contract/create-contract.component";
import {CreateServiceComponent} from "./service/create-service/create-service.component";
import {ListCustomerComponent} from "./customer/list-customer/list-customer.component";
import {ListServiceComponent} from "./service/list-service/list-service.component";
import {ListContractComponent} from "./contract/list-contract/list-contract.component";
import {UpdateCustomerComponent} from "./customer/update-customer/update-customer.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'customer', component: ListCustomerComponent},
  {path: 'service', component: ListServiceComponent},
  {path: 'contract', component: ListContractComponent},
  {path: 'create-customer', component: CreateCustomerComponent},
  {path: 'create-contract', component: CreateContractComponent},
  {path: 'create-service', component: CreateServiceComponent},
  {path: 'update-customer', component: UpdateCustomerComponent},
  {path: 'update-service', component: CreateCustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
