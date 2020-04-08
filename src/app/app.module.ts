import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {APP_BASE_HREF} from '@angular/common';
import { APP_ROUTING } from "./app.routing";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    APP_ROUTING
  ],
  declarations: [ 
    AppComponent,
  ],
  bootstrap:    [ AppComponent ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppModule { }
