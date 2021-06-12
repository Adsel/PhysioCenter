import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Exercise} from '../../../core/model';
import {DiagnosisService} from '../../../core/diagnosis.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-physio-panel-patient-card-exercises',
  templateUrl: './physio-panel-patient-card-exercises.component.html',
  styleUrls: ['./physio-panel-patient-card-exercises.component.scss']
})
export class PhysioPanelPatientCardExercisesComponent implements OnInit {
  exercises: Exercise[];
  @Input() diagnosisId: number;
  @Input() availableExercises: Exercise[];
  @Output() addedExercise = new EventEmitter<void>();

  constructor(
    private diagnosisService: DiagnosisService,
    private toatrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.exercises = [];
    this.diagnosisService.getDiagnosisExercises(this.diagnosisId).subscribe((exercises) => { this.exercises = exercises; });
  }

  addExercise($event: number): void {
    this.diagnosisService.addExercise({
      exerciseId: $event,
      diagnosisId: this.diagnosisId
    }).subscribe(() => {
      this.toatrService.success('Exercise has been added');
      this.addedExercise.emit();
    }, () => {
      this.toatrService.error('Failed to add exercise!');
    });
  }
}
