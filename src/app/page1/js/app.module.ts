import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Page1Component } from './page1/page1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpModule}  from '@angular/http';
import {RouterModule}  from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Page1Component,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([

{ path: "", component: DashboardComponent  }

    ]
    )

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
