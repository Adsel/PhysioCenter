import { Component, OnInit } from '@angular/core';
import {DiagnosisService} from '../../../core/diagnosis.service';
import {ActivatedRoute} from '@angular/router';
import {Diagnosis, Patient} from '../../../core/model';
import {PatientService} from '../../../core/patient.service';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../../../core/auth.service';

@Component({
  selector: 'app-physio-panel-patient-card',
  templateUrl: './physio-panel-patient-card.component.html',
  styleUrls: ['./physio-panel-patient-card.component.scss']
})
export class PhysioPanelPatientCardComponent implements OnInit {
  diagnosis: Diagnosis[];
  patient: Patient;
  diagnosisManagment = false;
  patientId: number;

  constructor(
    private diagnosisService: DiagnosisService,
    private activatedRoute: ActivatedRoute,
    private patientService: PatientService,
    private toatrService: ToastrService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      // tslint:disable-next-line:radix
      const patientId = parseInt(params.id);
      this.patientService.getPatientData(patientId).subscribe((patient) => { this.patient = patient; });
      this.patientId = patientId;

      this.loadExercises();
    });
  }

  loadExercises(): void {
    this.diagnosisService.getAllPatientDiagnosis(this.patientId).subscribe((diagnosis) => {
      this.diagnosis = diagnosis;
    });
  }

  toggleDiagnosisManagment(): void {
    this.diagnosisManagment = !this.diagnosisManagment;
  }

  addDiagnosis(event$): void {
    const physioId = this.authService.loggedUser.physioId;
    this.diagnosisService.addDiagnosis({
      physioId,
      patientId: this.patient.patientId,
      diagnosis: event$
    }).subscribe(() => {
      this.diagnosisManagment = false;
      this.loadExercises();
      this.toatrService.success('Diagnosis has been added');
    }, () => {
      this.toatrService.success('Failed to add diagnosis!');
    });
  }
}
