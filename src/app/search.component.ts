import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-search',
  template: `
  <input #newSearch
  (keyup.enter)="rijksSearch(newSearch.value)"
  (blur)="rijksSearch(newSearch.value); newSearch.value='' ">

<button (click)="rijksSearch(newSearch.value)">Search</button>

<div *ngFor="let article of searchRes.artObjects">
<h2>{{article.title}}</h2>

  <p>
    {{article.longTitle}}
  </p>
  <a href="{{article.webImage.url}}">Read full article</a>
</div>
`,
  styles: []
})
export class SearchComponent {

  searchRes: any[] = [];

  constructor(private api: ApiService) { }


  rijksSearch(newSearch: string) {
    this.api.getSearchRes(newSearch)
      .subscribe((data: string)=>{
        console.log(data);
        this.searchRes = JSON.parse(data);
      })
  }
}
