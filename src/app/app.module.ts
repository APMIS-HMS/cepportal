import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AppRoutingModule } from './app.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SummaryComponent } from './dashboard/summary/summary.component';
import { ProfessionComponent } from './dashboard/profession/profession.component';
import { AddProfessionComponent } from './dashboard/profession/add-profession/add-profession.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
    SummaryComponent,
    ProfessionComponent,
    AddProfessionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
