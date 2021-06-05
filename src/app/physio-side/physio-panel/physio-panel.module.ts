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

const routes = [
  { path: 'physio/visit', component: PhysioPanelVisitsComponent }
];

@NgModule({
  declarations: [
    PhysioPanelHomeComponent,
    PhysioPanelVisitsComponent,
    PhysioPanelCalendarComponent,
    PhysioPanelNavbarComponent,
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
