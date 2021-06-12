import {Component, Input, OnInit} from '@angular/core';
import {Exercise} from '../../../core/model';
import {DiagnosisService} from '../../../core/diagnosis.service';

@Component({
  selector: 'app-patient-panel-diagnosis-exercises',
  templateUrl: './patient-panel-diagnosis-exercises.component.html',
  styleUrls: ['./patient-panel-diagnosis-exercises.component.scss']
})
export class PatientPanelDiagnosisExercisesComponent implements OnInit {
  exercises: Exercise[];
  @Input() diagnosisId: number;

  constructor(private diagnosisService: DiagnosisService) { }

  ngOnInit(): void {
    this.diagnosisService.getDiagnosisExercises(this.diagnosisId).subscribe((exercises) => { this.exercises = exercises; });
  }

}
