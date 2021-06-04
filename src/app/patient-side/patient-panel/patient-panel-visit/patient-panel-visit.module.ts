import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientPanelVisitRegistrationComponent } from './patient-panel-visit-registration/patient-panel-visit-registration.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {PatientPanelModule} from '../patient-panel.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import { PatientPanelVisitListComponent } from './patient-panel-visit-list/patient-panel-visit-list.component';



@NgModule({
  declarations: [
    PatientPanelVisitRegistrationComponent,
    PatientPanelVisitListComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    PatientPanelModule,
    BrowserAnimationsModule,
    CalendarModule
  ]
})
export class PatientPanelVisitModule { }
