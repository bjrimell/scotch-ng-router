import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }         from './app.component';
import { CatListComponent }   from './cats/cat-list.component';
import { CatDetailsComponent }  from './cats/cat-details.component';
import { DogListComponent }      from './dogs/dog-list.component';
import { DogDetailsComponent }  from './dogs/dog-details.component';
import { PlaceListComponent }      from './places/place-list.component';
import { PlaceDetailsComponent }  from './places/place-details.component';
import { PetService }          from './pet.service';
import { Pet }          from './pet';
import { JourneyService }          from './journey.service';
import { PlaceService }          from './place.service';
import { Journey }          from './journey';
import { routing } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
     HttpModule,
    JsonpModule,
    routing
  ],
  declarations: [
    AppComponent,
    CatListComponent,
    CatDetailsComponent,
    DogListComponent,
    DogDetailsComponent,
    PlaceListComponent,
    PlaceDetailsComponent
  ],
  providers: [
    PetService,
    JourneyService,
    PlaceService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

