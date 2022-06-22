import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NhaXeService} from '../../service/nha-xe.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-sua',
  templateUrl: './sua.component.html',
  styleUrls: ['./sua.component.css']
})
export class SuaComponent implements OnInit {
  danhSachs: FormGroup;
  id: number;

  constructor(private nhaXeService: NhaXeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.nhaXeService.findById(this.id).subscribe(nhaXes => {
        this.danhSachs = new FormGroup({
          id: new FormControl(nhaXes.idVehicle),
          bienSo: new FormControl(nhaXes.licensePlates, [Validators.required]),
          loaiXe: new FormControl(nhaXes.typeVehicle, [Validators.required]),
          tenNhaXe: new FormControl(nhaXes.carManufacturer, [Validators.required]),
          diemDi: new FormControl(nhaXes.location2, [Validators.required]),
          diemDen: new FormControl(nhaXes.location, [Validators.required]),
          email: new FormControl(nhaXes.email, [Validators.required,
            Validators.pattern('^\\w+([.-]?\\w+)*@[a-z]+\\.(\\w+){2,}(\\.\\w{2,3})?')]),
          sdt: new FormControl(nhaXes.phoneNumber,
            [Validators.required, Validators.pattern('^(0?)(9(0|3|7))[0-9]{7}$')]),
          gioDen: new FormControl(nhaXes.timeFinish, [Validators.required]),
          gioDi: new FormControl(nhaXes.timeStart, [Validators.required]),
        });
      });
    });
  }

  ngOnInit(): void {
  }

  update(id: number) {
    if (this.danhSachs.valid) {
      const nhaXe = this.danhSachs.value;
      this.nhaXeService.updateNhaXe(id, nhaXe).subscribe(() => {
        alert('Cập nhật thành công');
        this.router.navigateByUrl('');
      });
    }
  }

}
