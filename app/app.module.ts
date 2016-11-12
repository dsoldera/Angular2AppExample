import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';
import { MaterialModule } from '@angular/material';
import { MaterializeDirective } from "angular2-materialize";
//import { TextMaskModule } from 'angular2-text-mask/dist/angular2TextMask';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { Form2Component } from './form2/form2.component';
//import { LOGGING_PROVIDERS } from './myLogger.module';

@NgModule ({
  declarations: [ // used to import my components 
    AppComponent,
    HomeComponent,
    MaterializeDirective,
    AboutComponent,
    FormComponent,
    Form2Component
  ], 
  imports: [ // used to import Angular 2 Modules 
    BrowserModule,
    MaterialModule,
    FormsModule, 
    //TextMaskModule,
    HttpModule,
    routing
    //LOGGING_PROVIDERS
   ], 
  bootstrap: [ 
    AppComponent
  ]
})

export class AppModule { }
