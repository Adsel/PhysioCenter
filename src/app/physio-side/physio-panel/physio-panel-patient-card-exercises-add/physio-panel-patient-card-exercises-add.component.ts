import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-physio-panel-patient-card-exercises-add',
  templateUrl: './physio-panel-patient-card-exercises-add.component.html',
  styleUrls: ['./physio-panel-patient-card-exercises-add.component.scss']
})
export class PhysioPanelPatientCardExercisesAddComponent implements OnInit {
  @Input() isDialogOpen: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.isDialogOpen = false;
  }
}
