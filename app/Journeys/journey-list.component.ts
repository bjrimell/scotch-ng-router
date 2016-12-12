// Import component decorator
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { JourneyService } from '../journey.service'

import { Observable } from 'rxjs/Observable';

import { Journey } from '../journey';

@Component({
  templateUrl:   `./app/Journeys/journey-list.component.html`
})
// Component class
export class JourneyListComponent implements OnInit {
    // Private properties for binding
  private sub:any;

  journeys: Observable<Journey[]>;
  origin: String;
  destination: String;
  constructor(private journeyService: JourneyService, private route: ActivatedRoute) {
  }

  ngOnInit() {
      // Subscribe to route params
      this.sub = this.route.params.subscribe(params => {
        let origin = params['origin'];
        let destination = params['destination'];
                console.log('Params are as follows: ' + params);
    this.journeys = this.journeyService.findJourneysByOriginAndDestination(origin, destination);
    this.origin = origin;
    this.destination = destination;
    });
  }

  ngOnDestroy() {
      // Clean sub to avoid memory leak
    this.sub.unsubscribe();
  }

  upVote(journey: Journey) {
    this.journeyService.upVote(journey._id);
    journey.upVotes ++;
  }

    downVote(journey: Journey) {
    this.journeyService.downVote(journey._id);
    journey.downVotes ++;
  }
}
