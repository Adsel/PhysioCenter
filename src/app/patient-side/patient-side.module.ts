import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientAuthComponent } from './patient-auth/patient-auth.component';
import { PatientAuthLoginComponent } from './patient-auth-login/patient-auth-login.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {PatientPanelModule} from './patient-panel/patient-panel.module';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';

const routes = [
  { path: 'patient', component: PatientAuthComponent },
  { path: 'patient/registration', component: PatientRegistrationComponent }
  // { path: 'patient/example', component: PhysioAuthComponent, canActivate: [AuthPhysioGuard },
];

@NgModule({
  declarations: [
    PatientAuthComponent,
    PatientAuthLoginComponent,
    PatientRegistrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    PatientPanelModule
  ]
})
export class PatientSideModule { }
