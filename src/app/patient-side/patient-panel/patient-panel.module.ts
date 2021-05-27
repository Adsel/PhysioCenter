import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientPanelHomeComponent } from './patient-panel-home/patient-panel-home.component';



@NgModule({
    declarations: [
        PatientPanelHomeComponent
    ],
    exports: [
        PatientPanelHomeComponent
    ],
    imports: [
        CommonModule
    ]
})
export class PatientPanelModule { }
