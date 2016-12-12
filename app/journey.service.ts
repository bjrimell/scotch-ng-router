// Imports
import { Injectable }    from '@angular/core';
import { Jsonp, URLSearchParams, Http, Headers, RequestOptions, RequestMethod, Request, Response } from '@angular/http';
import { Journey } from './journey';
import 'rxjs/add/operator/map';


// Decorator to tell Angular that this class can be injected as a service to another class
@Injectable()
export class JourneyService {
  // Class constructor with Jsonp injected for CORS, Http also
  constructor(private jsonp: Jsonp, private http: Http) { }
  // Base URL for Petfinder API
  private apiUrl = "http://localhost:8080/";

    findJourneys() {
    const endPoint = "api/journeys";
        let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp
                .get(this.apiUrl + endPoint, { search: params })
                .map(response => <Journey[]> response.json());
  }

    findJourneysById(journeyId: string) {
    const endPoint = "api/journeys/" + journeyId;
        let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp
                .get(this.apiUrl + endPoint, { search: params })
                .map(response => <Journey[]> response.json());
  }

    findJourneysByOrigin(origin: string) {
    const endPoint = "api/journeys/from/" + origin;
    console.log(endPoint);
    let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp
                .get(this.apiUrl + endPoint, { search: params })
                .map(response => <Journey[]> response.json());
  }

    findJourneysByDestination(destination: string) {
    const endPoint = "api/journeys/to/" + destination;
        let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp
                .get(this.apiUrl + endPoint, { search: params })
                .map(response => <Journey[]> response.json());
  }

    findJourneysByOriginAndDestination(origin: string, destination: string) {
    const endPoint = "api/journeys/from/" + origin + "/to/" + destination;
    console.log(this.apiUrl + endPoint);
        let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp
                .get(this.apiUrl + endPoint, { search: params })
                .map(response => <Journey[]> response.json());
  }

    addJourney(data) {
    let url = this.apiUrl + 'api/journeys';
    console.log('Add Journey Data Body object: ' + data.body);
    let headers = new Headers();
    
    this.http.post(url, data, {headers: headers}).subscribe();
    }

}
