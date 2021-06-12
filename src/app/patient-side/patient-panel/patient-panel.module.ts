import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientPanelHomeComponent } from './patient-panel-home/patient-panel-home.component';
import { PatientPanelNavbarComponent } from './patient-panel-navbar/patient-panel-navbar.component';
import { PatientPanelHomeCardComponent } from './patient-panel-home-card/patient-panel-home-card.component';
import { PatientPanelPhysioComponent } from './patient-panel-physio/patient-panel-physio.component';
import { PatientPanelUserComponent } from './patient-panel-user/patient-panel-user.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { PatientPanelVisitsComponent } from './patient-panel-visits/patient-panel-visits.component';
import {CoreModule} from '../../core/core.module';
import { PatientPanelDiagnosisExercisesComponent } from './patient-panel-diagnosis-exercises/patient-panel-diagnosis-exercises.component';



@NgModule({
    declarations: [
        PatientPanelHomeComponent,
        PatientPanelNavbarComponent,
        PatientPanelHomeCardComponent,
        PatientPanelPhysioComponent,
        PatientPanelUserComponent,
        PatientPanelVisitsComponent,
        PatientPanelDiagnosisExercisesComponent
    ],
    exports: [
        PatientPanelHomeComponent,
        PatientPanelNavbarComponent,
        PatientPanelHomeCardComponent
    ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    CoreModule
  ]
})
export class PatientPanelModule { }
