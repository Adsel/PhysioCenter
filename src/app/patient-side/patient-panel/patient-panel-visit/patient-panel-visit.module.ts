import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientPanelVisitRegistrationComponent } from './patient-panel-visit-registration/patient-panel-visit-registration.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {PatientPanelModule} from '../patient-panel.module';



@NgModule({
  declarations: [
    PatientPanelVisitRegistrationComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    PatientPanelModule
  ]
})
export class PatientPanelVisitModule { }
