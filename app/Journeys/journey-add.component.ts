// Import component decorator
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Title } from '@angular/platform-browser';

import { JourneyService } from '../journey.service';

import { PlaceService } from '../place.service';

import { Observable } from 'rxjs/Observable';

import { Journey } from '../journey';

@Component({
  template: `
    <h2>Journeys</h2>
    <p>This is where you can add a new journey.</p>
    <form class="form-horizontal" #form="ngForm" (ngSubmit)="submitForm(form.value)">
  <div class="form-group">
    <label class="control-label col-sm-2" for="email">Origin:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="origin" name="origin" [(ngModel)]="origin" placeholder="Enter origin">
    </div>
  </div>
  <div class="form-group">
    <label class="control-label col-sm-2" for="email">Destination:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="destination" name="destination" [(ngModel)]="destination" placeholder="Enter destination">
    </div>
  </div>
  <div class="form-group">
    <label class="control-label col-sm-2" for="email">Mode of transport:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="mode" name="mode" ngModel placeholder="Enter mode of transport">
    </div>
  </div>
  <div class="form-group">
    <label class="control-label col-sm-2" for="email">Price Paid:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="price" name="price" ngModel placeholder="Enter price paid">
    </div>
  </div>
  <div class="form-group">
    <label class="control-label col-sm-2" for="email">Currency:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="currency" name="currency" ngModel placeholder="Enter currency used">
    </div>
  </div>
  <div class="form-group">
    <label class="control-label col-sm-2" for="email">Journey Start Date:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="journeyDate" name="journeyDate" ngModel placeholder="Enter journey start date">
    </div>
  </div>
  <div class="form-group">
    <label class="control-label col-sm-2" for="email">Journey Duration (hours):</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="journeyDuration" name="journeyDuration" ngModel placeholder="Enter journey duration">
    </div>
  </div>
  <div class="form-group">
    <label class="control-label col-sm-2" for="email">Comments:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="comments" name="comments" ngModel placeholder="Enter comments">
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
export class JourneyAddComponent implements OnInit {

      // Private properties for binding
  private sub:any;
  private origin;
  private destination;

  journeys: Observable<Journey[]>;
  constructor(private journeyService: JourneyService, private placeService: PlaceService, private router: Router, private titleService: Title) {
  }

  submitForm(form: any): void{
    this.journeyService.addJourney(form);
    var originPlace : Object = {name: this.origin};
    this.placeService.addPlace(originPlace);
    var destinationPlace : Object = {name: this.destination};
    this.placeService.addPlace(destinationPlace);
    this.router.navigate(['/journeys/added']);
  };

  ngOnInit() {
    this.titleService.setTitle('Add a new journey');
  }

  ngOnDestroy() {
  }

}
