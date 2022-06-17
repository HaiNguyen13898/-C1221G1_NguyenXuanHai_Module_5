import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityService} from "../../service/facility.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-update-facility',
  templateUrl: './update-facility.component.html',
  styleUrls: ['./update-facility.component.css']
})
export class UpdateFacilityComponent implements OnInit {
  facilityForm: FormGroup;
  id: number;

  constructor(private facilityService: FacilityService,
              private  activatedRoute: ActivatedRoute,
              private  router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id')
      this.facilityService.findById(this.id).subscribe(facility => {
        this.facilityForm = new FormGroup({
          id: new FormControl(facility.id),
          serviceName: new FormControl(facility.serviceName, Validators.required),
          serviceArea: new FormControl(facility.serviceArea, Validators.required),
          serviceCost: new FormControl(facility.serviceCost, Validators.required),
          maxPeople: new FormControl(facility.maxPeople, Validators.required),
          standardRoom: new FormControl(facility.standardRoom, Validators.required),
          descriptionOtherConvenience: new FormControl(facility.descriptionOtherConvenience, Validators.required),
          poolArea: new FormControl(facility.poolArea, [Validators.required, Validators.pattern('^([,|.]?[0-9]+|)+$')]),
          numberFloor: new FormControl(facility.numberFloor, [Validators.required, Validators.pattern('^([,|.]?[0-9]+|)+$')]),
          rentType: new FormControl(facility.rentType, Validators.required),
          svType: new FormControl(facility.svType, Validators.required),
        })
      })
    })
  }

  ngOnInit(): void {
  }


  updateFacility(id: number) {
    if (this.facilityForm.valid) {
      const facility = this.facilityForm.value;
      this.facilityService.updateFacility(id, facility).subscribe(() => {
        alert('Cập nhật thành công');
        this.router.navigateByUrl('/facility/list')
      });
    }

  }
}
