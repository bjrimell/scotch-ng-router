// Import component decorator
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { JourneyService } from '../journey.service';

import { PlaceService } from '../place.service';

import { Observable } from 'rxjs/Observable';

import { Journey } from '../journey';

@Component({
  template: `
    <h2>Journey Added!</h2>
    <p>Thank you for adding a journey.</p>
    `
})
// Component class
export class JourneyAddedComponent implements OnInit {

      // Private properties for binding
  private sub:any;

  journeys: Observable<Journey[]>;
  constructor(private journeyService: JourneyService, private placeService: PlaceService, private router: Router) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
