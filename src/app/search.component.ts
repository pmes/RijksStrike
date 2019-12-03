import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { RijksArt } from './rijks-art';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-search',
  template: `
  <input #newSearch
  (keyup.enter)="rijksSearch(newSearch.value)">

<button (click)="rijksSearch(newSearch.value)">Search</button>

<mat-table [dataSource]="searchRes">
  ...
</mat-table>


`,
  styles: []
})
export class SearchComponent {

  searchRes: RijksArt [];

  constructor(private api: ApiService) { }


  rijksSearch(newSearch: string) {
    this.api.getSearchRes(newSearch)
      .subscribe(searchRes => this.searchRes = searchRes)
  }
}
