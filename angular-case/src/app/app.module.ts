import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CustomerModule} from "./customer/customer.module";
import {ContractModule} from "./contract/contract.module";
import {FacilityModule} from "./facility/facility.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CustomerModule,
    ContractModule,
    FacilityModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
