// Imports
import { Injectable }    from '@angular/core';
import { Jsonp, URLSearchParams, Http, Headers } from '@angular/http';
import { Place } from './place';
import 'rxjs/add/operator/map';


// Decorator to tell Angular that this class can be injected as a service to another class
@Injectable()
export class PlaceService {
  // Class constructor with Jsonp injected for CORS, Http also
  constructor(private jsonp: Jsonp, private http: Http) { }
  // Base URL for Petfinder API
  private apiUrl = "http://localhost:8080/";

  addPlace(data) {
    let url = this.apiUrl + 'api/places';
    let headers = new Headers();
    this.http.post(url, data, {headers: headers}).subscribe();
  }

  findPlaces() {
    const endPoint = "api/places";
        let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp
                .get(this.apiUrl + endPoint, { search: params })
                .map(response => <Place[]> response.json());
  }

findPlaceById(placeId: string) {
    const endPoint = "api/places/" + placeId;
        let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp
                .get(this.apiUrl + endPoint, { search: params })
                .map(response => <Place[]> response.json());
  }

  findPlaceByName(placeName: string) {
    const endPoint = "api/places/specific/" + placeName;
        let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp
                .get(this.apiUrl + endPoint, { search: params })
                .map(response => <Place[]> response.json());
  }

}
