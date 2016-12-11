// Import component decorator
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { JourneyService } from '../journey.service'

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
export class JourneyAddComponent implements OnInit {

      // Private properties for binding
  private sub:any;

  journeys: Observable<Journey[]>;
  constructor(private journeyService: JourneyService, private route: ActivatedRoute) {
  }

  submitForm(form: any): void{
    console.log('Form Data: ');
    console.log(form);
    let bodyString = JSON.stringify(form);
    console.log(bodyString);
    this.journeyService.addJourney(form);
  };

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
