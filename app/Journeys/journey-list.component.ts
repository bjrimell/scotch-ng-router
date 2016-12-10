// Import component decorator
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { JourneyService } from '../journey.service'

import { Observable } from 'rxjs/Observable';

import { Journey } from '../journey';

@Component({
  template: `
    <h2>Journeys</h2>
    <p>List of journeys.</p>
    <ul class="demo-list-icon mdl-list">
      <li class="mdl-list__item" *ngFor="let journey of journeys | async">
        <span class="mdl-list__item-primary-content">
            <i class="material-icons mdl-list__item-icon">places</i>
            {{journey.origin}} to {{journey.destination}} by Bus.
        </span>
      </li>
    </ul>
    `
})
// Component class
export class JourneyListComponent implements OnInit {
    // Private properties for binding
  private sub:any;

  journeys: Observable<Journey[]>;
  constructor(private journeyService: JourneyService, private route: ActivatedRoute) {
  }

  ngOnInit() {
      // Subscribe to route params
      this.sub = this.route.params.subscribe(params => {
        let origin = params['origin'];
        let destination = params['destination'];
                console.log('Params are as follows: ' + params);
    this.journeys = this.journeyService.findJourneysByOriginAndDestination(origin, destination);
    });
  }

  ngOnDestroy() {
      // Clean sub to avoid memory leak
    this.sub.unsubscribe();
  }
}
