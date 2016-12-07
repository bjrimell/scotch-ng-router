// Imports
import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service'
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
    <div *ngIf="place">
        <h2>{{place.name.$t}}</h2>
        <img src="{{place.media.photos.photo[3].$t}}"/>
        <p><strong>Age: </strong>{{place.age.$t}}</p>
        <p><strong>Sex: </strong>{{place.sex.$t}}</p>
        <p><strong>Description: </strong>{{place.description.$t}}</p>
    </div>
    `,
    
})
// Component class implementing OnInit
export class PlaceDetailsComponent implements OnInit {
  // Private properties for binding
  private sub:any;
  private place:string[];

  constructor(private petService: PetService, private route: ActivatedRoute) {

  }

  // Load data ones componet is ready
  ngOnInit() {
      // Subscribe to route params
      this.sub = this.route.params.subscribe(params => {
        let id = params['id'];
       // Retrieve Pet with Id route param
        this.petService.findPetById(id).subscribe(place => this.place = place);
    });
  }

  ngOnDestroy() {
      // Clean sub to avoid memory leak
    this.sub.unsubscribe();
  }
}