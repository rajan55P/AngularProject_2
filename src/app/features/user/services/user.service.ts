import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define your User model (if needed)
export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root' // This makes the service available throughout the app
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/users'; // Update with your actual API endpoint

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl); // Make HTTP GET request to fetch users
  }
}
