import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [ AppComponent, HomeComponent ], // used to import my components
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ], // used to import Angular 2 Modules
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
