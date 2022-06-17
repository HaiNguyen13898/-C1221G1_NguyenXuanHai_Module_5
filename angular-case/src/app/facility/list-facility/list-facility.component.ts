import {Component, OnInit} from '@angular/core';
import {Facility} from "../../model/facility";
import {FacilityService} from "../../service/facility.service";

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {
  services: Facility [] = [];
  idDel: number;
  nameDel: string;


  constructor(private facilityService: FacilityService) {

  }

  ngOnInit(): void {
    this.facilityService.getAll().subscribe(facilities => {
      this.services = facilities;
    })
  }


  inforFacility(id: number, serviceName: string) {
    this.idDel = id;
    this.nameDel = serviceName;
  }

  deleteFacility(idDel: number) {
    this.facilityService.deleteFacility(idDel).subscribe(() => {
      this.ngOnInit()
    })
  }
}
