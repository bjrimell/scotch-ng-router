// Import component decorator
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';


@Component({
  templateUrl: `./app/Home/home.component.html`
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
