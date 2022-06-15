import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityRoutingModule } from './facility-routing.module';
import {ListFacilityComponent} from "./list-facility/list-facility.component";
import {CreateFacilityComponent} from "./create-facility/create-facility.component";
import {UpdateFacilityComponent} from "./update-facility/update-facility.component";


@NgModule({
  declarations: [
    ListFacilityComponent,
    CreateFacilityComponent,
    UpdateFacilityComponent,
  ],
  imports: [
    CommonModule,
    FacilityRoutingModule
  ]
})
export class FacilityModule { }
