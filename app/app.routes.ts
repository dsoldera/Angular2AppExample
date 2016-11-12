import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { Form2Component } from './form2/form2.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'danielle/form', component: FormComponent},
  {path: 'form2', component: Form2Component}

];

// Export modulo de rotas do angular.
export const routing = RouterModule.forRoot(appRoutes);