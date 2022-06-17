import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityService} from "../../service/facility.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {
  createServiceForm: FormGroup;

  constructor(private facilityService: FacilityService,
              private router: Router) {
    this.createServiceForm = new FormGroup({
      id: new FormControl(),
      serviceName: new FormControl('', Validators.required),
      serviceArea: new FormControl('', Validators.required),
      serviceCost: new FormControl('', Validators.required),
      maxPeople: new FormControl('', Validators.required),
      standardRoom: new FormControl('', Validators.required),
      descriptionOtherConvenience: new FormControl('', Validators.required),
      poolArea: new FormControl('', [Validators.required, Validators.pattern('^([,|.]?[0-9]+|)+$')]),
      numberFloor: new FormControl('', [Validators.required, Validators.pattern('^([,|.]?[0-9]+|)+$')]),
      rentType: new FormControl('', Validators.required),
      svType: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
  }

  createService() {
    if(this.createServiceForm.valid) {
      const facility = this.createServiceForm.value;
      this.facilityService.saveFacility(facility).subscribe(() => {
        this.createServiceForm.reset();
        alert('Đã thêm mới thành công')
      })
    }

  }
}
