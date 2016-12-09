// Imports
import { Injectable }    from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Place } from './place';
import 'rxjs/add/operator/map';


// Decorator to tell Angular that this class can be injected as a service to another class
@Injectable()
export class PlaceService {
  // Class constructor with Jsonp injected for CORS, Http also
  constructor(private jsonp: Jsonp) { }
  // Base URL for Petfinder API
  private placesUrl = "http://localhost:8080/";

  findPlaces() {
    const endPoint = "api/places";
        let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp
                .get(this.placesUrl + endPoint, { search: params })
                .map(response => <Place[]> response.json());
  }

findById(placeId: string) {
    const endPoint = "api/places/" + placeId;
        let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp
                .get(this.placesUrl + endPoint, { search: params })
                .map(response => <Place[]> response.json());
  }
}
