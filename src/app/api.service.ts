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
  fvShow(): Observable<RijksArt[]> {
    return this.http.get<RijksArt[]>(`${this.apiUrl}RijksStrike`);
  }
  fvSave(fvRijksID: string, fvComment: string): Observable<RijksArt[]> {
    return this.http.post<RijksArt[]>(`${this.apiUrl}RijksStrike/${fvRijksID}/${fvComment}`, '');
  }
  fvEdit(fvRijksID: number, fvComment: string): Observable<RijksArt[]> {
    return this.http.patch<RijksArt[]>(`${this.apiUrl}RijksStrike/${fvRijksID}/${fvComment}`, '');
  }
  fvDelete(fvRijksID: number): Observable<RijksArt[]> {
    return this.http.delete<RijksArt[]>(`${this.apiUrl}RijksStrike/${fvRijksID}`);
  }
  getSearchRes(newSearch: string): Observable<RijksArt[]> {
    return this.http.get<RijksArt[]>(`${this.apiUrl}RijksStrike/${newSearch}`);
  }
}
