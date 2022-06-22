import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {NhaXe} from '../model/nha-xe';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class NhaXeService {

  constructor(private http: HttpClient) {
  }


  getAll(): Observable<NhaXe[]> {
    return this.http.get<NhaXe[]>(API_URL + '/vehicle/list');
  }

  create(nhaXe): Observable<NhaXe> {
    return this.http.post(API_URL + '/vehicle/create', nhaXe);
  }

  findById(id: number): Observable<NhaXe> {
    return this.http.get<NhaXe>(`${API_URL}/vehicle/find/${id}`);
  }

  update(id: number, nhaXe: NhaXe): Observable<NhaXe> {
    return this.http.put<NhaXe>(`${API_URL}/vehicle/update/${id}`, nhaXe);
  }

  delete(id: number): Observable<NhaXe> {
    return this.http.delete<NhaXe>(`${API_URL}/vehicle/delete/${id}`);
  }


}
