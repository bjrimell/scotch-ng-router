// Imports
// Deprecated import
// import { RouterConfig } from '@angular/router';
import { Routes } from '@angular/router';

import { PlaceListComponent }    from './place-list.component';
import { PlaceDetailsComponent }    from './place-details.component';

// Route Configuration
export const placeRoutes: Routes = [
  { path: 'places', component: PlaceListComponent },
  { path: 'places/:id', component: PlaceDetailsComponent }
];