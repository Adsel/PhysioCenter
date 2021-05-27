import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientAuthComponent } from './patient-auth/patient-auth.component';
import { PatientAuthLoginComponent } from './patient-auth-login/patient-auth-login.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {PatientPanelModule} from './patient-panel/patient-panel.module';

const routes = [
  { path: 'patient', component: PatientAuthComponent }
  // { path: 'patient/example', component: PhysioAuthComponent, canActivate: [AuthPhysioGuard },
];

@NgModule({
  declarations: [
    PatientAuthComponent,
    PatientAuthLoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    PatientPanelModule
  ]
})
export class PatientSideModule { }
