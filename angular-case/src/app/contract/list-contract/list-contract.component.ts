import {Component, OnInit} from '@angular/core';
import {Contract} from "../../model/contract";
import {Customer} from "../../model/customer";
import {Facility} from "../../model/facility";

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  contracts: Contract [] = [];

  constructor() {
    this.contracts.push({
      icContract: 1,
      startDateContract: '2020-07-14',
      endDateContract: '2020-07-28',
      deposit: 3000,

    })
    this.contracts.push({
      icContract: 2,
      startDateContract: '2022-07-14',
      endDateContract: '2022-07-28',
      deposit: 8000,
    })
    this.contracts.push({
      icContract: 3,
      startDateContract: '2021-07-14',
      endDateContract: '2021-07-28',
      deposit: 2000,
    })
    this.contracts.push({
      icContract: 4,
      startDateContract: '2019-07-14',
      endDateContract: '2020-07-28',
      deposit: 5000,
    })
  }

  ngOnInit(): void {
  }

}
