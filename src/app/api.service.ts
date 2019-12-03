import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RijksArt } from './rijks-art';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  getSearchRes(newSearch: string): Observable<RijksArt[]> {
    return this.http.get<RijksArt[]>(`${this.apiUrl}RijksStrike/${newSearch}`);
  }
}
