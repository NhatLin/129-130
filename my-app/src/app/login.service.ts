import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3002/login';  

  constructor(private http: HttpClient) {}

  loginUser(user: { username: string; password: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);  
  }
}
