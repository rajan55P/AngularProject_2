import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileProcessingService {

  private apiUrl = 'http://localhost:8080/api/process-file';

  constructor(private http: HttpClient) { }

  processFile(): Observable<any> {
    return this.http.post(this.apiUrl, {});
  }
}
