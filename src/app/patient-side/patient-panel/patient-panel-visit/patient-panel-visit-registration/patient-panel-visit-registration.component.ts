import { Component, OnInit } from '@angular/core';
import {Physio, VisitPlace} from '../../../../core/model';
import {VisitService} from '../../../../core/visit.service';
import {AuthService} from '../../../../core/auth.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-patient-panel-visit-registration',
  templateUrl: './patient-panel-visit-registration.component.html',
  styleUrls: ['./patient-panel-visit-registration.component.scss']
})
export class PatientPanelVisitRegistrationComponent implements OnInit {
  selectedDate: string;
  selectedPhysio: Physio;
  visits: VisitPlace[];

  constructor(
    private visitService: VisitService,
    private authService: AuthService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
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

  loadVisits(): void {
    this.visitService.getVisitsByDate(this.selectedPhysio.physioId, this.selectedDate).subscribe((visitList) => {
      this.visits = visitList;
    });
  }

  onSelect(date): void {
    this.selectedDate = this.formatDate(date);
    this.loadVisits();
  }

  backToPhysio(): void {
    this.selectedPhysio = null;
  }

  onChoosePhysio(physio): void {
    this.visits = null;
    this.selectedDate = null;
    this.selectedPhysio = physio;
  }

  backToCalendar(): void {
    this.visits = null;
    this.selectedDate = null;
  }

  onRegisterVisit($event: VisitPlace): void {
    this.visitService.registerVisit(this.selectedPhysio.physioId, {
      timeFrom: $event.timeFrom,
      timeTo: $event.timeTo,
      date: this.selectedDate,
      patientId: this.authService.loggedUser.patientId
    }).subscribe((visit) => {
      this.loadVisits();
      this.toastrService.success('Visit has been registered successfully');
    }, () => {
      this.toastrService.error('Failed to register visit!');
    });
  }
}
