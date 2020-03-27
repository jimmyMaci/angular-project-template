import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
    ])
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    ProductListComponent, 
    TopBarComponent 
  ],
  bootstrap:    [ AppComponent ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppModule { }
