// Import component decorator
import { Component, OnInit } from '@angular/core';

import { JourneyService } from '../journey.service'

import { Observable } from 'rxjs/Observable';

import { Journey } from '../journey';

@Component({
  template: `
    <h2>Places</h2>
    <p>List of places</p>
    <ul class="demo-list-icon mdl-list">
      <li class="mdl-list__item" *ngFor="let place of places | async">
        <span class="mdl-list__item-primary-content">
            <i class="material-icons mdl-list__item-icon">places</i>
            <a [routerLink]="['/places', place.id]">{{place.title}}</a>
        </span>
      </li>
    </ul>
    `
})
// Component class
export class PlaceListComponent implements OnInit {

  places: Observable<Journey[]>;
  constructor(private journeyService: JourneyService) {

  }

  ngOnInit() {
    this.places = this.journeyService.findJourneys();
  }

}
