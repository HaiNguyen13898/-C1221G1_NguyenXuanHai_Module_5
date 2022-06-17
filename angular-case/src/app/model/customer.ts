import {CustomerType} from "./customer-type";

export interface  Customer {
id: number;
codeCustomer: string;
nameCustomer: string;
dateBirth: string;
gender: string;
idCard: string;
phone: string;
email: string;
address: string;
cusType:CustomerType;
}
