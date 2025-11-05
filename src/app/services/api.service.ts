import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiUrl; // e.g. http://127.0.0.1:8000/api/

  constructor(private http: HttpClient) {}

  // Generic GET request
  getData(endpoint: string): Observable<any> {
    return this.http.get(`${this.baseUrl}${endpoint}/`);
  }

  // Generic POST request
  postData(endpoint: string, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${endpoint}/`, data);
  }

  // Generic PUT request
  putData(endpoint: string, id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}${endpoint}/${id}/`, data);
  }

  // Generic DELETE request
  deleteData(endpoint: string, id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${endpoint}/${id}/`);
  }
}
