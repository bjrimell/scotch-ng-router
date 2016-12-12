// Import component decorator
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { JourneyService } from '../journey.service'

import { Observable } from 'rxjs/Observable';

import { Journey } from '../journey';

@Component({
  template: `
    <h2>Journeys</h2>
    <p>This is the landing page for journeys.</p>
    <a class="btn btn-info" role="button" [routerLink]="['/journeys/add']">Add Journey</a>
    <a class="btn btn-info" role="button" [routerLink]="['/journeys/request']">Request Journey</a>
    `
})
// Component class
export class JourneyLandingComponent implements OnInit {
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
