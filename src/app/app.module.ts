import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule, routableComponents } from './app.router';

import { DataService } from './shared/services/data.service';
import { UserService } from './shared/services/users.service';
import { AuthService } from './shared/services/auth.service';
import { LogService } from './shared/services/log.service';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    routableComponents
  ],
  providers: [
    DataService,
    UserService,
    AuthService,
    LogService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
