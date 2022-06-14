import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryComponent} from "./dictionary/dictionary.component";
import {DictinoryDetailComponent} from "./dictinory-detail/dictinory-detail.component";


const routes: Routes = [
   // {path: '', pathMatch: 'full', redirectTo: 'list'},
  // {path: 'list', component: DictionaryComponent},
  {path: '', component: DictionaryComponent},
  {path: 'detail/:id', component: DictinoryDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
