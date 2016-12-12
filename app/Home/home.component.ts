// Import component decorator
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';


@Component({
  template: `
    <h1>Find your perfect route</h1>
    <div class="form-group">
      <label for="origin">From:</label>
      <input type="text" class="form-control" [(ngModel)]="origin" id="origin" placeholder="Enter journey origin">
    </div>
    <div class="form-group">
      <label for="destination">To:</label>
      <input type="text" class="form-control inline" [(ngModel)]="destination" id="destination" placeholder="Enter journey destination">
    </div>
    <div class="text-center"><a [routerLink]="['/journey', 'how-to-get-from', origin, 'to', destination]" class="btn btn-primary btn-lg" role="button">Search Journeys</a></div>
    `
})
// Component class
export class HomeComponent implements OnInit {

      // Private properties for binding
  private sub:any;

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
