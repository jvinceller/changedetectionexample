import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Outer1Component } from './outer1/outer1.component';
import { Inner1Component } from './inner1/inner1.component';
import { Outer2Component } from './outer2/outer2.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Inner2Component } from './inner2/inner2.component';
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    Outer1Component,
    Inner1Component,
    Outer2Component,
    Inner2Component
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
