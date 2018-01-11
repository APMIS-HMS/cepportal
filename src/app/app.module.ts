import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AppRoutingModule } from './app.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SummaryComponent } from './dashboard/summary/summary.component';
import { ProfessionComponent } from './dashboard/profession/profession.component';
import { AddProfessionComponent } from './dashboard/profession/add-profession/add-profession.component';
import { ProfessionService } from './services/profession.service';
import { HttpModule } from '@angular/http';
import { ProfessionCaderComponent } from './dashboard/profession/profession-cader/profession-cader.component';
import { TitleComponent } from './dashboard/title/title.component';
import { TitleService } from './services/title.service';
import { DeleteComponent } from './dashboard/delete/delete.component';
import { AddComponent } from './dashboard/add/add.component';
import { CountryComponent } from './dashboard/country/country.component';
import { CountryService } from './services/country.service';
import { StatesComponent } from './dashboard/country/states/states.component';
import { LgComponent } from './dashboard/country/states/lg/lg.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
    SummaryComponent,
    ProfessionComponent,
    AddProfessionComponent,
    ProfessionCaderComponent,
    TitleComponent,
    DeleteComponent,
    AddComponent,
    CountryComponent,
    StatesComponent,
    LgComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProfessionService, TitleService, CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
