import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {
  createServiceForm: FormGroup;

  constructor() {
    this.createServiceForm = new FormGroup({
      name: new FormControl('', Validators.required),
      serviceArea: new FormControl('', Validators.required),
      serviceCost: new FormControl('', Validators.required),
      maxPeople: new FormControl('', Validators.required),
      standardRoom: new FormControl('', Validators.required),
      descriptionOtherConvenience: new FormControl('', Validators.required),
      poolArea: new FormControl('', [Validators.required, Validators.pattern('^([,|.]?[0-9]+|)+$')]),
      numberFloor: new FormControl('', [Validators.required, Validators.pattern('^([,|.]?[0-9]+|)+$')]),
      rentType: new FormControl('', Validators.required),
      serviceType: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
  }

  createService() {

  }
}
