import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../../model/customer";
import {Facility} from "../../model/facility";

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  createContractForm: FormGroup;

  constructor() {
    this.createContractForm = new FormGroup({
      startDateContract: new FormControl('', Validators.required),
      endDateContract: new FormControl('', Validators.required),
      deposit: new FormControl('', [Validators.required, Validators.pattern('^([,|.]?[0-9]+|)+$')]),
      customer: new FormControl('', Validators.required),
      service: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
  }

  createContract() {

  }
}
