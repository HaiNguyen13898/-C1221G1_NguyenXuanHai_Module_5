import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CreateCustomerComponent} from "./customer/create-customer/create-customer.component";
import {CreateContractComponent} from "./contract/create-contract/create-contract.component";
import {CreateFacilityComponent} from "./facility/create-facility/create-facility.component";
import {ListCustomerComponent} from "./customer/list-customer/list-customer.component";
import {ListFacilityComponent} from "./facility/list-facility/list-facility.component";
import {ListContractComponent} from "./contract/list-contract/list-contract.component";
import {UpdateCustomerComponent} from "./customer/update-customer/update-customer.component";
import {UpdateFacilityComponent} from "./facility/update-facility/update-facility.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'customer', component: ListCustomerComponent},
  {path: 'facility', component: ListFacilityComponent},
  {path: 'contract', component: ListContractComponent},
  {path: 'create-customer', component: CreateCustomerComponent},
  {path: 'create-contract', component: CreateContractComponent},
  {path: 'create-facility', component: CreateFacilityComponent},
  {path: 'update-customer', component: UpdateCustomerComponent},
  {path: 'update-facility', component: UpdateFacilityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
