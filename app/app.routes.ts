// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { placeRoutes }  from './places/place.routes';
import { journeyRoutes }  from './journeys/journey.routes';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/places',
    pathMatch: 'full'
  },
  ...placeRoutes,
    ...journeyRoutes
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
