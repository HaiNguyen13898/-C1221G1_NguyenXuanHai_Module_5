import {Component, OnInit} from '@angular/core';
import {NhaXe} from '../../model/nha-xe';
import {NhaXeService} from '../../service/nha-xe.service';

@Component({
  selector: 'app-danh-sach',
  templateUrl: './danh-sach.component.html',
  styleUrls: ['./danh-sach.component.css']
})
export class DanhSachComponent implements OnInit {
  nhaXe: NhaXe [] = [];

  idDel: number;
  soXe: string;
  p: string | number;

  constructor(private nhaXeService: NhaXeService) {
  }

  ngOnInit(): void {
    this.listNhaXe();
  }

  listNhaXe() {
    this.nhaXeService.getAll().subscribe(nhaxes => {
      this.nhaXe = nhaxes;
    });
  }


  infor(idDel: number, soXe: string) {
    this.idDel = idDel;
    this.soXe = soXe;
  }

  delete(idDel: number) {
    this.nhaXeService.delete(idDel).subscribe(() => {
      this.ngOnInit();
    });
  }


}
