import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhysioPanelHomeComponent } from './physio-panel-home/physio-panel-home.component';
import { PhysioPanelVisitsComponent } from './physio-panel-visits/physio-panel-visits.component';
import { PhysioPanelCalendarComponent } from './physio-panel-calendar/physio-panel-calendar.component';
import {CalendarModule} from 'primeng/calendar';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import { PhysioPanelNavbarComponent } from './physio-panel-navbar/physio-panel-navbar.component';
import {RouterModule} from '@angular/router';
import {PatientPanelModule} from '../../patient-side/patient-panel/patient-panel.module';
import { PhysioPanelPatientsComponent } from './physio-panel-patients/physio-panel-patients.component';
import { PhysioPanelVisitsListComponent } from './physio-panel-visits-list/physio-panel-visits-list.component';
import { PhysioPanelPatientCardComponent } from './physio-panel-patient-card/physio-panel-patient-card.component';

const routes = [
  { path: 'physio/visit', component: PhysioPanelVisitsComponent },
  { path: 'physio/patients', component: PhysioPanelPatientsComponent },
  { path: 'physio/patient/:id', component: PhysioPanelPatientCardComponent }
];

@NgModule({
  declarations: [
    PhysioPanelHomeComponent,
    PhysioPanelVisitsComponent,
    PhysioPanelCalendarComponent,
    PhysioPanelNavbarComponent,
    PhysioPanelPatientsComponent,
    PhysioPanelVisitsListComponent,
    PhysioPanelPatientCardComponent,
  ],
  exports: [
    PhysioPanelHomeComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    CalendarModule,
    RouterModule.forChild(routes),
    PatientPanelModule
  ]
})
export class PhysioPanelModule { }
