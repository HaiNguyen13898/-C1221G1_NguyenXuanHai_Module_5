import {Customer} from "./customer";
import {Facility} from "./facility";

export interface Contract {
  id: number;
  startDateContract: string;
  endDateContract: string;
  deposit: number;
  customer: Customer;
  service: Facility;
}
