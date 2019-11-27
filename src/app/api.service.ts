import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RijksArt } from './rijks-art';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  getSearchRes(newSearch: string) {
    return this.http.get(`${this.apiUrl}subscribers/${newSearch}`);
  }
}
