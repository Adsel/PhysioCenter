import { Component, OnInit } from '@angular/core';
import {Patient} from '../../../core/model';
import {PhysioService} from '../../../core/physio.service';

@Component({
  selector: 'app-physio-panel-patients',
  templateUrl: './physio-panel-patients.component.html',
  styleUrls: ['./physio-panel-patients.component.scss']
})
export class PhysioPanelPatientsComponent implements OnInit {
  patients: Patient[];

  constructor(
    private physioService: PhysioService
  ) { }

  ngOnInit(): void {
    this.physioService.getPatientList().subscribe((patients) => {
      this.patients = patients;
    });
  }

}
