import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DanhSachComponent} from './quan-ly-nha-xe/danh-sach/danh-sach.component';
import {SuaComponent} from './quan-ly-nha-xe/sua/sua.component';
import {ThemMoiComponent} from './quan-ly-nha-xe/them-moi/them-moi.component';


const routes: Routes = [
  {path: '', component: DanhSachComponent},
  {path: 'create', component: ThemMoiComponent},
  {path: 'update/:id', component: SuaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
