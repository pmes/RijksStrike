import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { RijksArt } from './rijks-art';

@Component({
  selector: 'app-search',
  template: `
  <input matInput #newSearch
  (keyup.enter)="rijksSearch(newSearch.value)">

<button mat-button (click)="rijksSearch(newSearch.value)">Search</button>
<button mat-button (click)="rijksShow()">Show Favorites</button>

<mat-card style="max-width: 500px; margin-bottom: 10px;" *ngFor="let favorite of searchRes; let i=index">
<mat-card-title-group>
<mat-card-title>{{favorite.title}}</mat-card-title>
<mat-card-subtitle>{{favorite.desc}}</mat-card-subtitle>
<a href="{{favorite.image}}" target="_blank"><img mat-card-lg-image src="{{favorite.image|replace : 's0' : 's128'}}" alt="{{favorite.title}}" width="128"></a>
</mat-card-title-group>
<mat-card-content>
<p>
<a href="{{favorite.link}}" target="_blank">View Details on rijksmuseum.nl</a><br>
<textarea matInput #fvComment [value]="favorite.fvComment === false ? '' : favorite.fvComment" placeholder="Leave a comment" rows="4" cols="50"></textarea>
</p>
  </mat-card-content>
  <mat-card-actions>
  <button mat-button (click)="rijksSave(favorite.RijksID, fvComment.value)">Save</button>
  <button [disabled]="favorite.id === false" mat-button (click)="rijksEdit(favorite.id, fvComment.value)">Edit</button>
  <button [disabled]="favorite.id === false" mat-button (click)="rijksDelete(favorite.id)">Delete</button>
</mat-card-actions>
</mat-card>

`,
  styles: []
})
export class SearchComponent {

  searchRes: RijksArt[];

  constructor(private api: ApiService) { }

  rijksShow() {
    this.api.fvShow()
      .subscribe(searchRes => this.searchRes = searchRes)
  }

  rijksSave(newID: string, newComment: string) {
    this.api.fvSave(newID, newComment)
    .subscribe(searchRes => this.searchRes = searchRes)
  }

  rijksEdit(editID: number, editComment: string) {
    this.api.fvEdit(editID, editComment)
    .subscribe(searchRes => this.searchRes = searchRes)
  }

  rijksDelete(editID: number) {
    this.api.fvDelete(editID)
    .subscribe(searchRes => this.searchRes = searchRes)
  }

  rijksSearch(newSearch: string) {
    this.api.getSearchRes(newSearch)
      .subscribe(searchRes => this.searchRes = searchRes)
  }
}
