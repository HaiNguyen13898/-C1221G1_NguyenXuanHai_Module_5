import {Component, OnInit} from '@angular/core';
import {Facility} from "../../model/facility";

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {

  services: Facility [] = [];


  constructor() {
    this.services.push({
      serviceId: 1,
      serviceName: 'Villa No Beach Front',
      serviceArea: 20200,
      serviceCost: 123123,
      maxPeople: 5,
      standardRoom: 'vip',
      descriptionOtherConvenience: 'dọn phòng free',
      poolArea: 234,
      numberFloor: 1,
      rentType: 'year',
      svType: 'villa'
    })
    this.services.push({
      serviceId: 2,
      serviceName: 'Villa Beach Front',
      serviceArea: 2000,
      serviceCost: 32321,
      maxPeople: 10,
      standardRoom: 'vip',
      descriptionOtherConvenience: 'dọn phòng free',
      poolArea: 100,
      numberFloor: 20,
      rentType: 'day',
      svType: 'villa'
    })
    this.services.push({
      serviceId: 3,
      serviceName: 'Villa No Beach Front',
      serviceArea: 20200,
      serviceCost: 123123,
      maxPeople: 5,
      standardRoom: 'vip',
      descriptionOtherConvenience: 'dọn phòng free',
      poolArea: 234,
      numberFloor: 1,
      rentType: 'year',
      svType: 'villa'
    })
    this.services.push({
      serviceId: 4,
      serviceName: 'Room Twin 01',
      serviceArea: 1100,
      serviceCost: 12300,
      maxPeople: 100,
      standardRoom: 'normal',
      descriptionOtherConvenience: 'dọn phòng free',
      poolArea: 10,
      numberFloor: 2,
      rentType: 'day',
      svType: 'room'
    })
    this.services.push({
      serviceId: 5,
      serviceName: 'House Princess 02',
      serviceArea: 4000,
      serviceCost: 439231,
      maxPeople: 2,
      standardRoom: 'vip',
      descriptionOtherConvenience: 'dọn phòng free',
      poolArea: 500,
      numberFloor: 89,
      rentType: 'Month',
      svType: 'House'
    })
  }

  ngOnInit(): void {
  }

}
