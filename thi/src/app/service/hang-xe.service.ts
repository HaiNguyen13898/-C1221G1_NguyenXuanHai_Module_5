import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HangXe} from '../model/hangXe';
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class HangXeService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<HangXe[]> {
    return this.http.get<HangXe[]>(API_URL + '/carManufacture/list');
  }
}
