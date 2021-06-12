import { Component, OnInit } from '@angular/core';
import {DiagnosisService} from '../../../core/diagnosis.service';
import {ActivatedRoute} from '@angular/router';
import {Diagnosis, Patient} from '../../../core/model';
import {PhysioService} from '../../../core/physio.service';
import {PatientService} from '../../../core/patient.service';

@Component({
  selector: 'app-physio-panel-patient-card',
  templateUrl: './physio-panel-patient-card.component.html',
  styleUrls: ['./physio-panel-patient-card.component.scss']
})
export class PhysioPanelPatientCardComponent implements OnInit {
  diagnosis: Diagnosis[];
  patient: Patient;

  constructor(
    private diagnosisService: DiagnosisService,
    private activatedRoute: ActivatedRoute,
    private patientService: PatientService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      // tslint:disable-next-line:radix
      const patientId = parseInt(params.id);
      this.patientService.getPatientData(patientId).subscribe((patient) => { this.patient = patient; });

      this.diagnosisService.getAllPatientDiagnosis(patientId).subscribe((diagnosis) => {
        this.diagnosis = diagnosis;
      });
    });
  }

}
