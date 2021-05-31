import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhysioPanelHomeComponent } from './physio-panel-home/physio-panel-home.component';



@NgModule({
  declarations: [
    PhysioPanelHomeComponent
  ],
  exports: [
    PhysioPanelHomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PhysioPanelModule { }
