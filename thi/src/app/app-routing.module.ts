import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DanhSachComponent} from './quan-ly-nha-xe/danh-sach/danh-sach.component';
import {SuaComponent} from './quan-ly-nha-xe/sua/sua.component';


const routes: Routes = [
  {path: '', component: DanhSachComponent},
  {path: 'update/:id', component: SuaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
