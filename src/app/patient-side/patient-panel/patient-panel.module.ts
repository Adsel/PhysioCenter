import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientPanelHomeComponent } from './patient-panel-home/patient-panel-home.component';
import { PatientPanelNavbarComponent } from './patient-panel-navbar/patient-panel-navbar.component';
import { PatientPanelHomeCardComponent } from './patient-panel-home-card/patient-panel-home-card.component';



@NgModule({
    declarations: [
        PatientPanelHomeComponent,
        PatientPanelNavbarComponent,
        PatientPanelHomeCardComponent
    ],
    exports: [
        PatientPanelHomeComponent
    ],
    imports: [
        CommonModule
    ]
})
export class PatientPanelModule { }
