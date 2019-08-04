/*
; ============================================
; Title:  app.module.ts
; Author: Richard Krasso
; Modified By: Lea Trueworthy
; Date:   04 August 2019
; Description: Assignment 4.4
;=============================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms'
import { FruitService } from './fruit.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [FruitService],
  bootstrap: [AppComponent]
})
export class AppModule { }