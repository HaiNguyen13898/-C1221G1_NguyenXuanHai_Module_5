import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import {ListContractComponent} from "./list-contract/list-contract.component";
import {CreateContractComponent} from "./create-contract/create-contract.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListContractComponent,
    CreateContractComponent,
  ],
  imports: [
    CommonModule,
    ContractRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContractModule { }
