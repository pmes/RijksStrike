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

<mat-accordion>
<mat-expansion-panel *ngFor="let favorite of searchRes">
<mat-expansion-panel-header>
<mat-panel-title>{{favorite.title}}</mat-panel-title>
<mat-panel-description>
{{favorite.desk}}
    </mat-panel-description>
  </mat-expansion-panel-header>
  <p>
  <a href="{{favorite.image}}" target="_blank"><img src="{{favorite.image|replace : 's0' : 's128'}}" /></a>
  </p>
  
</mat-expansion-panel>
</mat-accordion>

`,
  styles: []
})
export class SearchComponent {

  searchRes: RijksArt[];

  constructor(private api: ApiService) { }


  rijksSearch(newSearch: string) {
    this.api.getSearchRes(newSearch)
      .subscribe(searchRes => this.searchRes = searchRes)
  }
}
