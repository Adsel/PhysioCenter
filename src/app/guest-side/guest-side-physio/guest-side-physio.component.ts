import { Component, OnInit } from '@angular/core';
import {Physio} from '../../core/model';
import {PatientService} from '../../core/patient.service';

@Component({
  selector: 'app-guest-side-physio',
  templateUrl: './guest-side-physio.component.html',
  styleUrls: ['./guest-side-physio.component.scss']
})
export class GuestSidePhysioComponent implements OnInit {
  physiotherapists: Physio[];

  constructor(
    private patientService: PatientService
  ) { }

  ngOnInit(): void {
    this.patientService.getPhysioList().subscribe((physioList) => {
      this.physiotherapists = physioList;
    });
  }

}
