import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'danielle/form', component: FormComponent}

];

// Export modulo de rotas do angular.
export const routing = RouterModule.forRoot(appRoutes);