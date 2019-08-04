/*
; ============================================
; Title:  app.module.ts
; Author: Richard Krasso
; Modified By: Lea Trueworthy
; Date:   02 August 2019
; Description: Assignment 4.3
;=============================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }