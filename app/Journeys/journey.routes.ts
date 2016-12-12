// Imports
// Deprecated import
// import { RouterConfig } from '@angular/router';
import { Routes } from '@angular/router';

import { JourneyListComponent }    from './journey-list.component';
import { JourneyLandingComponent }    from './journey-landing.component';
import { JourneyAddComponent }    from './journey-add.component';
import { JourneyAddedComponent }    from './journey-added.component';
import { JourneyRequestComponent }    from './journey-request.component';

// Route Configuration
export const journeyRoutes: Routes = [
  { path: 'journey/how-to-get-from/:origin/to/:destination', component: JourneyListComponent },
  { path: 'journeys', component: JourneyLandingComponent },
  { path: 'journeys/add', component: JourneyAddComponent },
  { path: 'journeys/added', component: JourneyAddedComponent },
  { path: 'journeys/request', component: JourneyRequestComponent }
];