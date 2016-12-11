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
        <form class="form-horizontal" #form="ngForm" (ngSubmit)="submitForm(form.value)">
  <div class="form-group">
    <label class="control-label col-sm-2" for="email">Origin:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="origin" name="origin" ngModel placeholder="Enter origin">
    </div>
  </div>
  <div class="form-group">
    <label class="control-label col-sm-2" for="email">Destination:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="destination" name="destination" ngModel placeholder="Enter destination">
    </div>
  </div>
  <div class="form-group">
    <label class="control-label col-sm-2" for="email">Mode of transport:</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="email" placeholder="Enter mode of transport">
    </div>
  </div>
  <div class="form-group">
    <label class="control-label col-sm-2" for="email">Price Paid:</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="email" placeholder="Enter price paid">
    </div>
  </div>
  <div class="form-group">
    <label class="control-label col-sm-2" for="email">Currency:</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="email" placeholder="Enter currency">
    </div>
  </div>
  <div class="form-group">
    <label class="control-label col-sm-2" for="email">Journey Start Date:</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="email" placeholder="Enter date you started the journey">
    </div>
  </div>
  <div class="form-group">
    <label class="control-label col-sm-2" for="email">Journey Start Time:</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="email" placeholder="Enter time you started your journey">
    </div>
  </div>
  <div class="form-group">
    <label class="control-label col-sm-2" for="email">Journey Duration:</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="email" placeholder="Enter journey duration in hours">
    </div>
  </div>
  <div class="form-group">
    <label class="control-label col-sm-2" for="email">Comments:</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="email" placeholder="Enter additional comments">
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-info">Submit</button>
    </div>
  </div>
</form>
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

    submitForm(form: any): void{
    console.log('Form Data: ');
    console.log(form);
    let bodyString = JSON.stringify(form);
    console.log(bodyString);
    this.journeyService.addJourney(form);
  };
}
