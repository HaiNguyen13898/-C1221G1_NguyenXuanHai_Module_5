import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer";
import {environment} from "../../environments/environment";
import {Facility} from "../model/facility";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Facility[]> {
    return this.http.get<Facility[]>(API_URL + '/facilities');
  }

  saveFacility(facility): Observable<Facility> {
    return this.http.post<Facility>(API_URL + '/facilities', facility);
  }

  findById(id: number): Observable<Facility> {
    return this.http.get<Facility>(`${API_URL}/facilities/${id}`);
  }

  updateFacility(id: number, facility: Facility): Observable<Facility> {
    return this.http.put<Facility>(`${API_URL}/facilities/${id}`, facility);
  }

  deleteFacility(id: number): Observable<Facility> {
    return this.http.delete<Facility>(`${API_URL}/facilities/${id}`);
  }
}
