import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentDataService {
  private baseUrl = 'http://localhost:8080'; // replace with your actual backend URL

  constructor(private http: HttpClient) {}

  generateStudentData(count: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/generate/${count}`,{});
  }
}
