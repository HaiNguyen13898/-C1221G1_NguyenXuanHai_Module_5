import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Customer} from "../../model/customer";
import {Facility} from "../../model/facility";
import {ContractService} from "../../service/contract.service";
import {Router} from "@angular/router";
import {CustomerService} from "../../service/customer.service";
import {FacilityService} from "../../service/facility.service";

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  createContractForm: FormGroup;
  customers: Customer[] = [];
  facilities: Facility[] = [];

  constructor(private  contractService: ContractService,
              private customerService: CustomerService,
              private facilityService: FacilityService,
              private router: Router) {
    this.createContractForm = new FormGroup({
      id: new FormControl(),
      startDateContract: new FormControl('', Validators.required),
      endDateContract: new FormControl('', Validators.required),
      deposit: new FormControl('', [Validators.required, Validators.pattern('^([,|.]?[0-9]+|)+$')]),
      customer: new FormControl('', Validators.required),
      service: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
    // this.customers= this.customerService.getAll()
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    })
    this.facilityService.getAll().subscribe(facilities => {
      this.facilities = facilities;
    })
  }

  createContract() {
    const contract = this.createContractForm.value;
    this.contractService.saveContract(contract).subscribe(() => {
      this.createContractForm.reset();
      alert('Đã thêm mới thành công')
      this.router.navigateByUrl('/contract/list')
    })
    // this.contractService.saveContract(contract);
  }
}
