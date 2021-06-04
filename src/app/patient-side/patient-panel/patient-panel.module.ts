import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientPanelHomeComponent } from './patient-panel-home/patient-panel-home.component';
import { PatientPanelNavbarComponent } from './patient-panel-navbar/patient-panel-navbar.component';
import { PatientPanelHomeCardComponent } from './patient-panel-home-card/patient-panel-home-card.component';
import { PatientPanelPhysioComponent } from './patient-panel-physio/patient-panel-physio.component';
import { PatientPanelUserComponent } from './patient-panel-user/patient-panel-user.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';



@NgModule({
    declarations: [
        PatientPanelHomeComponent,
        PatientPanelNavbarComponent,
        PatientPanelHomeCardComponent,
        PatientPanelPhysioComponent,
        PatientPanelUserComponent
    ],
    exports: [
        PatientPanelHomeComponent,
        PatientPanelNavbarComponent
    ],
    imports: [
      FormsModule,
      CommonModule,
      BrowserModule
    ]
})
export class PatientPanelModule { }
