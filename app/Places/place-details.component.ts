// Imports
import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../place.service';
import { JourneyService } from '../journey.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../place';
import { Journey } from '../journey';

@Component({
  template: `
    <div *ngIf="place">
        <h2>{{place.name}}</h2>
        <p><strong>Name: </strong>{{place.name}}</p>
        <p><strong>Country: </strong>{{place.country}}</p>
        <p>Journeys starting at {{place.name}} (make this a reusable component):
        <ul class="demo-list-icon mdl-list">
          <li class="mdl-list__item" *ngFor="let journey of journeysFromHere | async">
            <span class="mdl-list__item-primary-content">
                <i class="material-icons mdl-list__item-icon">flags</i>
                <a [routerLink]="['/journey', journey.origin + '-to-' + journey.destination]">{{journey.origin}} to {{journey.destination}}</a>
            </span>
          </li>
        </ul>
        <p>Journeys ending at {{place.name}}:
        <ul class="demo-list-icon mdl-list">
          <li class="mdl-list__item" *ngFor="let journey of journeysToHere | async">
            <span class="mdl-list__item-primary-content">
                <i class="material-icons mdl-list__item-icon">flags</i>
                <a [routerLink]="['/journey', journey.origin + '-to-' + journey.destination]">{{journey.origin}} to {{journey.destination}}</a>
            </span>
          </li>
        </ul>
    </div>
    `,
    
})
// Component class implementing OnInit
export class PlaceDetailsComponent implements OnInit {
  // Private properties for binding
  private sub:any;
  private place:Observable<Place>;
  private journeys: Observable<Journey[]>;

  constructor(private placeService: PlaceService, private journeyService: JourneyService, private route: ActivatedRoute) {

  }

  // Load data ones componet is ready
  ngOnInit() {
      // Subscribe to route params
      this.sub = this.route.params.subscribe(params => {
        let id = params['id'];
       // Retrieve Pet with Id route param
        this.placeService.findPlaceByName(id).subscribe(place => this.place = place);
        this.journeysFromHere = this.journeyService.findJourneysByOrigin(id);
        this.journeysToHere = this.journeyService.findJourneysByDestination(id);
    });
  }

  ngOnDestroy() {
      // Clean sub to avoid memory leak
    this.sub.unsubscribe();
  }
}