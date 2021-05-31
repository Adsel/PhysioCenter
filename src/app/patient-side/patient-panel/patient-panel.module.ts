import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientPanelHomeComponent } from './patient-panel-home/patient-panel-home.component';
import { PatientPanelNavbarComponent } from './patient-panel-navbar/patient-panel-navbar.component';



@NgModule({
    declarations: [
        PatientPanelHomeComponent,
        PatientPanelNavbarComponent
    ],
    exports: [
        PatientPanelHomeComponent
    ],
    imports: [
        CommonModule
    ]
})
export class PatientPanelModule { }
