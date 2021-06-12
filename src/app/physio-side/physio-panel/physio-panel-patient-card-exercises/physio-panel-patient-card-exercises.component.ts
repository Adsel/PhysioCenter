import {Component, Input, OnInit} from '@angular/core';
import {Exercise} from '../../../core/model';
import {DiagnosisService} from '../../../core/diagnosis.service';

@Component({
  selector: 'app-physio-panel-patient-card-exercises',
  templateUrl: './physio-panel-patient-card-exercises.component.html',
  styleUrls: ['./physio-panel-patient-card-exercises.component.scss']
})
export class PhysioPanelPatientCardExercisesComponent implements OnInit {
  exercises: Exercise[];
  @Input() diagnosisId: number;

  constructor(
    private diagnosisService: DiagnosisService
  ) { }

  ngOnInit(): void {
    this.exercises = [];
    this.diagnosisService.getDiagnosisExercises(this.diagnosisId).subscribe((exercises) => { this.exercises = exercises; });
  }
}
