// Import component decorator
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';


@Component({
  template: `
    <h2>This is the home page!</h2>
    <div class="form-group">
      <label for="origin">Origin:</label>
      <input type="text" class="form-control" id="origin">
    </div>
    <div class="form-group">
      <label for="destination">Destination:</label>
      <input type="text" class="form-control inline" id="destination">
    </div>
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
