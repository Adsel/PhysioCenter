import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Exercise} from '../../../core/model';

@Component({
  selector: 'app-physio-panel-patient-card-exercises-add',
  templateUrl: './physio-panel-patient-card-exercises-add.component.html',
  styleUrls: ['./physio-panel-patient-card-exercises-add.component.scss']
})
export class PhysioPanelPatientCardExercisesAddComponent implements OnInit {
  isDialogOpen = false;
  @Input() availableExercises: Exercise[];
  @Output() choosedExerciseId = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.isDialogOpen = false;
  }

  openDialog(): void {
    this.isDialogOpen = true;
  }

  chooseExercise(exerciseId: number): void {
    this.isDialogOpen = false;
    this.choosedExerciseId.emit(exerciseId);
  }
}
