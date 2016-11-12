import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';
import { MaterialModule } from '@angular/material';
//import { TextMaskModule } from 'angular2-text-mask/dist/angular2TextMask';

import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';

@NgModule ({
  declarations: [ // used to import my components 
    AppComponent, 
    HomeComponent,
    FormComponent
  ], 
  imports: [ // used to import Angular 2 Modules 
    BrowserModule,
    MaterialModule,
    FormsModule, 
    //TextMaskModule,
    HttpModule, 
    routing
   ], 
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
