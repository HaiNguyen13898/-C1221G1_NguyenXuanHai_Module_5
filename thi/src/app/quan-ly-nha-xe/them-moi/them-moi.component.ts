import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HangXe} from '../../model/hangXe';
import {LoaiXe} from '../../model/loai-xe';
import {DiaDiem} from '../../model/dia-diem';
import {NhaXeService} from '../../service/nha-xe.service';
import {LoaiXeService} from '../../service/loai-xe.service';
import {HangXeService} from '../../service/hang-xe.service';
import {DiaDiemService} from '../../service/dia-diem.service';
import {Router} from '@angular/router';
import {NhaXe} from '../../model/nha-xe';

@Component({
  selector: 'app-them-moi',
  templateUrl: './them-moi.component.html',
  styleUrls: ['./them-moi.component.css']
})
export class ThemMoiComponent implements OnInit {
  createForm: FormGroup;
  hangXe: HangXe [] = [];
  loaiXe: LoaiXe [] = [];
  diaDiem: DiaDiem [] = [];



  constructor(private loaiXeService: LoaiXeService,
              private hangXeService: HangXeService,
              private diaDiemService: DiaDiemService,
              private nhaXeService: NhaXeService,
              private router: Router) {
    this.createForm = new FormGroup({
      id: new FormControl(),
      licensePlates: new FormControl(),
      typeVehicle: new FormControl(),
      carManufacturer: new FormControl(),
      location2: new FormControl(),
      location: new FormControl(),
      email: new FormControl(),
      phoneNumber: new FormControl(),
      timeStart: new FormControl(),
      timeFinish: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.loaiXeService.getAll().subscribe(loaiXe => {
      this.loaiXe = loaiXe;
    });
    this.hangXeService.getAll().subscribe(hangXe => {
      this.hangXe = hangXe;
    });
    this.diaDiemService.getAll().subscribe(diaDiem => {
      this.diaDiem = diaDiem;
    });
  }
  create() {
    // if(this.createCustomerForm.valid) {
    const nhaXe = this.createForm.value;
    this.nhaXeService.create(nhaXe).subscribe(() => {
      this.createForm.reset();
      this.router.navigateByUrl('');
      alert('Tạo mới thành công');
      // })
    });
  }
}
