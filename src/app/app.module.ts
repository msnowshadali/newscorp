import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service'

const appRoutes : Routes = [
  { path:'dashboard', component:DashboardComponent },
  { path:'login', component:LoginComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
    ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
