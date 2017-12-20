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

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
    SummaryComponent,
    ProfessionComponent,
    AddProfessionComponent,
    ProfessionCaderComponent,
    TitleComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProfessionService, TitleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
