// Imports
import { Injectable }    from '@angular/core';
import { Jsonp, URLSearchParams, Http } from '@angular/http';
import { Journey } from './journey';
import 'rxjs/add/operator/map';


// Decorator to tell Angular that this class can be injected as a service to another class
@Injectable()
export class JourneyService {
  // Class constructor with Jsonp injected for CORS, Http also
  constructor(private jsonp: Jsonp) { }
  // Base URL for Petfinder API
  private databaseUrl = "http://localhost:8080/";

    findJourneys() {
    const endPoint = "api/journeys";
        let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp
                .get(this.databaseUrl + endPoint, { search: params })
                .map(response => <Journey[]> response.json());
  }

    findJourneysById(journeyId: string) {
    const endPoint = "api/journeys/" + journeyId;
        let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp
                .get(this.databaseUrl + endPoint, { search: params })
                .map(response => <Journey[]> response.json());
  }

    findJourneysByOrigin(origin: string) {
    const endPoint = "api/journeys/from/" + origin;
    console.log(endPoint);
    let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp
                .get(this.databaseUrl + endPoint, { search: params })
                .map(response => <Journey[]> response.json());
  }

    findJourneysByDestination(destination: string) {
    const endPoint = "api/journeys/to/" + destination;
        let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp
                .get(this.databaseUrl + endPoint, { search: params })
                .map(response => <Journey[]> response.json());
  }

}
