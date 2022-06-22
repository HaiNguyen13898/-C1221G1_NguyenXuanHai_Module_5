import {LoaiXe} from './loai-xe';
import {HangXe} from './hangXe';
import {DiaDiem} from './dia-diem';

export interface NhaXe {
  id?: number;
  licensePlates?: string;
  typeVehicle?: LoaiXe;
  carManufacturer?: HangXe;
  location2?: DiaDiem;
  location?: DiaDiem;
  email?: string;
  phoneNumber?: string;
  timeFinish?: string;
  timeStart?: string;
}
