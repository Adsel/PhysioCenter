import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientAuthComponent } from './patient-auth/patient-auth.component';
import { PatientAuthLoginComponent } from './patient-auth-login/patient-auth-login.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {PatientPanelModule} from './patient-panel/patient-panel.module';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import {PatientPanelPhysioComponent} from './patient-panel/patient-panel-physio/patient-panel-physio.component';
import {PatientPanelUserComponent} from './patient-panel/patient-panel-user/patient-panel-user.component';
import {PatientPanelVisitRegistrationComponent} from './patient-panel/patient-panel-visit/patient-panel-visit-registration/patient-panel-visit-registration.component';
import {PatientPanelVisitModule} from './patient-panel/patient-panel-visit/patient-panel-visit.module';
import {PatientPanelVisitsComponent} from './patient-panel/patient-panel-visits/patient-panel-visits.component';

const routes = [
  { path: 'patient', component: PatientAuthComponent },
  { path: 'patient/registration', component: PatientRegistrationComponent },
  { path: 'patient/physio', component: PatientPanelPhysioComponent },
  { path: 'patient/settings', component: PatientPanelUserComponent },
  { path: 'patient/visit', component: PatientPanelVisitRegistrationComponent },
  { path: 'patient/card', component: PatientPanelVisitsComponent },
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
    PatientPanelModule,
    PatientPanelVisitModule
  ]
})
export class PatientSideModule { }
