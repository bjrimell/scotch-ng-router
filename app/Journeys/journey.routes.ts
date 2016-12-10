// Imports
// Deprecated import
// import { RouterConfig } from '@angular/router';
import { Routes } from '@angular/router';

import { JourneyListComponent }    from './journey-list.component';

// Route Configuration
export const journeyRoutes: Routes = [
  { path: 'journey/how-to-get-from/:origin/to/:destination', component: JourneyListComponent }
];