// Import component decorator
import { Component, OnInit } from '@angular/core';

import { PlaceService } from '../place.service'

import { Observable } from 'rxjs/Observable';

import { Place } from '../place';

@Component({
  template: `
    <h2>Places</h2>
    <p>List of places</p>
    <ul class="demo-list-icon mdl-list">
      <li class="mdl-list__item" *ngFor="let place of places | async">
        <span class="mdl-list__item-primary-content">
            <i class="material-icons mdl-list__item-icon">places</i>
            <a [routerLink]="['/places', place.name]">{{place.name}}</a>
        </span>
      </li>
    </ul>
    `
})
// Component class
export class PlaceListComponent implements OnInit {

  places: Observable<Place[]>;
  constructor(private placeService: PlaceService) {
  }

  ngOnInit() {
    this.places = this.placeService.findPlaces();
  }

}
