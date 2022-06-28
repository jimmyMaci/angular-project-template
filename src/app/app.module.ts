import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {APP_BASE_HREF} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
  ],
  bootstrap:    [ AppComponent ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppModule { }
