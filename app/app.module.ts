import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }         from './app.component';
import { PlaceListComponent }      from './places/place-list.component';
import { PlaceDetailsComponent }  from './places/place-details.component';
import { JourneyListComponent }  from './journeys/journey-list.component';
import { JourneyLandingComponent }  from './journeys/journey-landing.component';
import { JourneyAddComponent }  from './journeys/journey-add.component';
import { JourneyRequestComponent }  from './journeys/journey-request.component';
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
    PlaceListComponent,
    PlaceDetailsComponent,
    JourneyListComponent,
    JourneyLandingComponent,
    JourneyAddComponent,
    JourneyRequestComponent
  ],
  providers: [
    JourneyService,
    PlaceService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

