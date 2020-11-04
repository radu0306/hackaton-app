import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetStartedPageComponent } from './components/get-started-page/get-started-page.component';
import { Question1Component } from './components/question1/question1.component';
import { Question2Component } from './components/question2/question2.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    GetStartedPageComponent,
    Question1Component,
    Question2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule
  ],
  providers: [],
  exports: [AppRoutingModule,MatSliderModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
