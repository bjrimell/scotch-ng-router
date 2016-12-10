// Imports
// Deprecated import
// import { RouterConfig } from '@angular/router';
import { Routes } from '@angular/router';

import { JourneyListComponent }    from './journey-list.component';

// Route Configuration
export const journeyRoutes: Routes = [
  { path: 'journey/:origin/:destination', component: JourneyListComponent },
  { path: 'journey/:origin/:destination/how-to-get-from-:origin-to-:destination', component: JourneyListComponent }
];