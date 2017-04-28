import { NgModule, ModuleWithProviders } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { Form2Component } from './form2/form2.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const appRoutes: Routes = [
  { path: '', component: FormComponent },
  { path: 'about', component: AboutComponent },
  { path: 'form', component: FormComponent },
  { path: 'form2', component: Form2Component },
  { path: '**', component: ErrorPageComponent }

];

@NgModule ({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})

// Export modulo de rotas do angular.
export class AppRoutingModule { }
export const routableComponents = [
  HomeComponent,
  ErrorPageComponent,
  AboutComponent,
  FormComponent,
  Form2Component
];
