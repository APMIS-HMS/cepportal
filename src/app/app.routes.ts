import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthComponent} from './auth/auth.component';
import { ProfessionComponent } from './dashboard/profession/profession.component';
import { AddProfessionComponent } from './dashboard/profession/add-profession/add-profession.component';

const appRoutes: Routes = [
    {path: '', redirectTo: 'auth', pathMatch: 'full'},
    {path: 'auth', component : AuthComponent},
    {path: 'dashboard', component : DashboardComponent,
      children : [
        {path: '', redirectTo : 'profession', pathMatch: 'full'},
        {path : 'profession', component : ProfessionComponent
        }
      ]
    }
];

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {
  }
