import { Component, OnInit } from '@angular/core';
import {DiagnosisService} from '../../../core/diagnosis.service';

@Component({
  selector: 'app-physio-panel-patient-card',
  templateUrl: './physio-panel-patient-card.component.html',
  styleUrls: ['./physio-panel-patient-card.component.scss']
})
export class PhysioPanelPatientCardComponent implements OnInit {
  diagnosis: any;

  constructor(private diagnosisService: DiagnosisService) { }

  ngOnInit(): void {
    this.diagnosisService.getAllDiagnosis().subscribe((diagnosis) => {
      this.diagnosis = diagnosis;
    });
  }

}
