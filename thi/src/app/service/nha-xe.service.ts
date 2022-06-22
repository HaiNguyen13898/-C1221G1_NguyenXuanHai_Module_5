import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {NhaXe} from '../model/nha-xe';
import {Observable} from 'rxjs';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class NhaXeService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<NhaXe[]> {
    return this.http.get<NhaXe[]>(API_URL + '/listVehicle');
  }

  save(nhaXe): Observable<NhaXe> {
    return this.http.post<NhaXe>(API_URL + '/giaodichs', nhaXe);
  }

  findById(id: number): Observable<NhaXe> {
    return this.http.get<NhaXe>(`${API_URL}/nhaXes/${id}`);
  }

  updateNhaXe(id: number, nhaXe: NhaXe): Observable<NhaXe> {
    return this.http.put<NhaXe>(`${API_URL}/nhaXes/${id}`, nhaXe);
  }

  deleteNhaXe(id: number): Observable<NhaXe> {
    return this.http.delete<NhaXe>(`${API_URL}/nhaXes/${id}`);
  }

}
