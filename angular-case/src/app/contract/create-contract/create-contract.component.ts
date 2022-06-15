import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../../model/customer";
import {Facility} from "../../model/facility";
import {ContractService} from "../../service/contract.service";
import {Router} from "@angular/router";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  createContractForm: FormGroup;
  customers: Customer[] = [];
  services: Facility[] = [];

  constructor(private  contractService: ContractService,
              private customerService: CustomerService,
              private router: Router) {
    this.createContractForm = new FormGroup({
      idContract: new FormControl(),
      startDateContract: new FormControl('', Validators.required),
      endDateContract: new FormControl('', Validators.required),
      deposit: new FormControl('', [Validators.required, Validators.pattern('^([,|.]?[0-9]+|)+$')]),
      customer: new FormControl('', Validators.required),
      service: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
    this.customers= this.customerService.getAll()
  }

  createContract() {
    const contract = this.createContractForm.value;
    this.contractService.saveContract(contract);
    this.createContractForm.reset();
    alert('Đã thêm mới thành công')
    this.router.navigateByUrl('contract')
  }
}
