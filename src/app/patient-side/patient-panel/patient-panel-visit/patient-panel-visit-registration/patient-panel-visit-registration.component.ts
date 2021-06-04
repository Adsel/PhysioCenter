import { Component, OnInit } from '@angular/core';
import {Physio, VisitPlace} from '../../../../core/model';
import {PatientService} from '../../../../core/patient.service';
import {VisitService} from '../../../../core/visit.service';

@Component({
  selector: 'app-patient-panel-visit-registration',
  templateUrl: './patient-panel-visit-registration.component.html',
  styleUrls: ['./patient-panel-visit-registration.component.scss']
})
export class PatientPanelVisitRegistrationComponent implements OnInit {
  currentDate: Date;
  es: any;
  minDateValue: Date;
  maxDateValue: Date;
  selectedDate: string;
  physiotherapists: Physio[];
  selectedPhysio: Physio;
  visits: VisitPlace[];

  constructor(
    private patientService: PatientService,
    private visitService: VisitService
  ) { }

  ngOnInit(): void {
    this.physiotherapists = [];
    this.patientService.getPhysioList().subscribe((physioList) => {
      this.physiotherapists = physioList;
    });
  }

  formatDate(date): string {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }

    if (day.length < 2) {
      day = '0' + day;
    }

    return [year, month, day].join('-');
  }

  onSelect(date): void {
    this.selectedDate = this.formatDate(date);
    this.visitService.getVisitsByDate(this.selectedPhysio.physioId, this.selectedDate).subscribe((visitList) => {
      this.visits = visitList;
    });
  }

  choosePhysio(physio): void {
    this.selectedPhysio = physio;
  }

  backToPhysio(): void {
    this.selectedPhysio = null;
  }
}
