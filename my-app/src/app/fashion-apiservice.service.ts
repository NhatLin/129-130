import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Fashion } from './models/Fashion';

@Injectable({
  providedIn: 'root'
})
export class FashionAPIServiceService {
  constructor(private _http: HttpClient) { }

  // Method to get all fashion items
  getFashions(): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8");
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    };
    return this._http.get<any>("http://localhost:3002/fashions", requestOptions).pipe(
      map(res => JSON.parse(res) as Array<Fashion>),
      retry(3),
      catchError(this.handleError)
    );
  }

  // New method to get a specific fashion item by id
  getFashion(id: string): Observable<Fashion> {
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8");
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    };
    return this._http.get<any>(`http://localhost:3002/fashions/${id}`, requestOptions).pipe(
      map(res => JSON.parse(res) as Fashion),
      retry(3),
      catchError(this.handleError)
    );
  }

  postFashion(fashion: Fashion): Observable<Fashion> {
    const headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8");
    return this._http.post<Fashion>("http://localhost:3002/fashions", JSON.stringify(fashion), { headers })
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }
  

  // Error handling method
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}
