import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }         from './app.component';
import { PlaceListComponent }      from './places/place-list.component';
import { PlaceDetailsComponent }  from './places/place-details.component';
import { JourneyListComponent }  from './journeys/journey-list.component';
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
    JourneyListComponent
  ],
  providers: [
    JourneyService,
    PlaceService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

