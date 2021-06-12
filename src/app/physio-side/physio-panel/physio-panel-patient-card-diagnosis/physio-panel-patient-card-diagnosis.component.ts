import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-physio-panel-patient-card-diagnosis',
  templateUrl: './physio-panel-patient-card-diagnosis.component.html',
  styleUrls: ['./physio-panel-patient-card-diagnosis.component.scss']
})
export class PhysioPanelPatientCardDiagnosisComponent implements OnInit {
  diagnosis: string;
  @Output() diagnosisEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addDiagnosis(): void {
    this.diagnosisEmitter.emit(this.diagnosis);
  }
}
