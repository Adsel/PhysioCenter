import { Component, OnInit } from '@angular/core';
import {Diagnosis, Patient} from '../../../core/model';
import {DiagnosisService} from '../../../core/diagnosis.service';
import {AuthService} from '../../../core/auth.service';
import {PatientService} from '../../../core/patient.service';

@Component({
  selector: 'app-patient-panel-visits',
  templateUrl: './patient-panel-visits.component.html',
  styleUrls: ['./patient-panel-visits.component.scss']
})
export class PatientPanelVisitsComponent implements OnInit {
  diagnosis: Diagnosis[];
  patient: Patient;

  constructor(
    private authService: AuthService,
    private patientService: PatientService,
    private diagnosisService: DiagnosisService
  ) { }

  ngOnInit(): void {
    const patientId = this.authService.loggedUser.patientId;
    this.patientService.getPatientData(patientId).subscribe((patient) => {
      this.patient = patient;
    });
    this.diagnosisService.getAllPatientDiagnosis(patientId).subscribe((diagnosis) => {
      this.diagnosis = diagnosis;
    });
  }

}
