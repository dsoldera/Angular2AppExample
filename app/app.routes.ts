import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent}
];

// Export modulo de rotas do angular.
export const routing = RouterModule.forRoot(appRoutes);