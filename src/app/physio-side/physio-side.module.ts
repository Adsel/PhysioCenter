import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhysioAuthComponent } from './physio-auth/physio-auth.component';
import {RouterModule} from '@angular/router';
import { PhysioAuthLoginComponent } from './physio-auth-login/physio-auth-login.component';
import {FormsModule} from '@angular/forms';
import {PhysioPanelModule} from './physio-panel/physio-panel.module';

const routes = [
  { path: 'physio', component: PhysioAuthComponent }
  // { path: 'physio/example', component: PhysioAuthComponent, canActivate: [AuthPhysioGuard },
];

@NgModule({
  declarations: [
    PhysioAuthComponent,
    PhysioAuthLoginComponent
  ],
  imports: [
    PhysioPanelModule,
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class PhysioSideModule { }
