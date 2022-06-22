import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NhaXeService} from '../../service/nha-xe.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {LoaiXe} from '../../model/loai-xe';
import {HangXe} from '../../model/hangXe';
import {DiaDiem} from '../../model/dia-diem';
import {LoaiXeService} from '../../service/loai-xe.service';
import {HangXeService} from '../../service/hang-xe.service';
import {DiaDiemService} from '../../service/dia-diem.service';

@Component({
  selector: 'app-sua',
  templateUrl: './sua.component.html',
  styleUrls: ['./sua.component.css']
})
export class SuaComponent implements OnInit {
  danhSachs: FormGroup;
  loaiXe: LoaiXe [] = [];
  hangXe: HangXe [] = [];
  diaDiem: DiaDiem [] = [];
  id: number;
  equals(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }

  constructor(private nhaXeService: NhaXeService,
              private loaiXeService: LoaiXeService,
              private hangXeService: HangXeService,
              private diaDiemService: DiaDiemService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.nhaXeService.findById(this.id).subscribe(nhaXes => {
        this.danhSachs = new FormGroup({
          id: new FormControl(nhaXes.id),
          licensePlates: new FormControl(nhaXes.licensePlates, [Validators.required]),
          typeVehicle: new FormControl(nhaXes.typeVehicle, [Validators.required]),
          carManufacturer: new FormControl(nhaXes.carManufacturer, [Validators.required]),
          location2: new FormControl(nhaXes.location2, [Validators.required]),
          location: new FormControl(nhaXes.location, [Validators.required]),
          email: new FormControl(nhaXes.email, [Validators.required,
            Validators.pattern('^\\w+([.-]?\\w+)*@[a-z]+\\.(\\w+){2,}(\\.\\w{2,3})?')]),
          phoneNumber: new FormControl(nhaXes.phoneNumber,
            [Validators.required, Validators.pattern('^(0?)(9(0|3|7))[0-9]{7}$')]),
          timeFinish: new FormControl(nhaXes.timeFinish, [Validators.required]),
          timeStart: new FormControl(nhaXes.timeStart, [Validators.required]),
        });
      });
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

  update(id: number) {
    if (this.danhSachs.valid) {
      const nhaXe = this.danhSachs.value;
      this.nhaXeService.update(id, nhaXe).subscribe(() => {
        alert('Cập nhật thành công');
        this.router.navigateByUrl('');
      });
    }
  }

}
