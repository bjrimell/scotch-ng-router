// Imports
import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../place.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
    <div *ngIf="place">
        <h2>{{place.name}}</h2>
        <p><strong>Name: </strong>{{place.name}}</p>
        <p><strong>Country: </strong>{{place.country}}</p>
    </div>
    `,
    
})
// Component class implementing OnInit
export class PlaceDetailsComponent implements OnInit {
  // Private properties for binding
  private sub:any;
  private place:Observable<Place>;

  constructor(private placeService: PlaceService, private route: ActivatedRoute) {

  }

  // Load data ones componet is ready
  ngOnInit() {
      // Subscribe to route params
      this.sub = this.route.params.subscribe(params => {
        let id = params['id'];
       // Retrieve Pet with Id route param
        this.placeService.findPlaceByName(id).subscribe(place => this.place = place);
    });
  }

  ngOnDestroy() {
      // Clean sub to avoid memory leak
    this.sub.unsubscribe();
  }
}