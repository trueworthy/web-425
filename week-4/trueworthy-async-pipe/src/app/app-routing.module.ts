/*
; ============================================
; Title:  app-routing.module.ts
; Author: Richard Krasso
; Modified By: Lea Trueworthy
; Date:   04 August 2019
; Description: Assignment 4.4
;=============================================
*/


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }