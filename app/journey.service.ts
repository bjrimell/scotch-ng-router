// Imports
import { Injectable }    from '@angular/core';
import { Jsonp, URLSearchParams, Http } from '@angular/http';
import { Journey } from './journey'
import 'rxjs/add/operator/map';


// Decorator to tell Angular that this class can be injected as a service to another class
@Injectable()
export class JourneyService {
  // Class constructor with Jsonp injected for CORS, Http also
  constructor(private jsonp: Jsonp, private http: Http) { }
  // Base URL for Petfinder API
  private petsUrl = 'http://api.petfinder.com/';
  private googleMapsUrl = "https://maps.googleapis.com/";
  private testDataUrl = "https://jsonplaceholder.typicode.com/";

  // Get a list of journeys
  findJourneys() {
    // End point for list of places:
    // https://maps.googleapis.com/maps/api/place/details/json?reference=CmRYAAAAciqGsTRX1mXRvuXSH2ErwW-jCINE1aLiwP64MCWDN5vkXvXoQGPKldMfmdGyqWSpm7BEYCgDm-iv7Kc2PF7QA7brMAwBbAcqMr5i1f4PwTpaovIZjysCEZTry8Ez30wpEhCNCXpynextCld2EBsDkRKsGhSLayuRyFsex6JA6NPh9dyupoTH3g&key=AIzaSyBuBZw01MOq7yZWB4f5KGwY_ncPHoDiLeE
    
    const testEndPoint = "posts";
    const endPoint = "maps/api/place/details/json";
    let params = new URLSearchParams();
    // Return response
   return this.http
              .get(this.testDataUrl + testEndPoint, { search: params })
              .map(response => <Journey[]> response.json());
  }
  
  // Get a list if pets based on animal
  findPets(animal : string) {
    // End point for list of pets:
    // http://api.petfinder.com/pet.find?key=[API_KEY]&animal=[ANIMAL]&format=json&location=texas
    const endPoint = 'pet.find'
    // URLSearchParams makes it easier to set query parameters and construct URL
    // rather than manually concatenating
    let params = new URLSearchParams();
    params.set('key', '555f8155d42d5c9be4705beaf4cce089');
    params.set('location', 'texas');
    params.set('animal', animal);
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    // Return response
   return this.jsonp
              .get(this.petsUrl + endPoint, { search: params })
              .map(response => <Journey[]> response.json().petfinder.pets.pet);
  }

  findPetById(id: string){
    // End point for list of pets:
    // http://api.petfinder.com/pet.find?key=[API_KEY]&animal=[ANIMAL]&format=json&location=texas
    const endPoint = 'pet.get'
    // URLSearchParams makes it easier to set query parameters and construct URL
    // rather than manually concatinatng
    let params = new URLSearchParams();
    params.set('key', '555f8155d42d5c9be4705beaf4cce089');
    params.set('id', id);
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    console.log(id);
    // Return response
   return this.jsonp
              .get(this.petsUrl + endPoint, { search: params })
              .map(response => {
                
                console.log(response.json().petfinder.pet);
                return  response.json().petfinder.pet
              });
  }
}
