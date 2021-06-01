import { Component, OnInit } from '@angular/core';
import {PatientService} from '../../../core/patient.service';
import {Physio} from '../../../core/model';

@Component({
  selector: 'app-patient-panel-physio',
  templateUrl: './patient-panel-physio.component.html',
  styleUrls: ['./patient-panel-physio.component.scss']
})
export class PatientPanelPhysioComponent implements OnInit {
  physiotherapists: Physio[];
  activePhysio: Physio;

  constructor(
    private patientService: PatientService
  ) { }

  ngOnInit(): void {
    this.physiotherapists = [];
    this.patientService.getPhysioList().subscribe((physioList) => {
      this.physiotherapists = physioList;
    });
  }

  viewProfile($event: MouseEvent, physioId: number): void {
    $event.preventDefault();
    this.activePhysio = this.physiotherapists.filter((physio) => physio.physioId === physioId)[0];
  }
}
