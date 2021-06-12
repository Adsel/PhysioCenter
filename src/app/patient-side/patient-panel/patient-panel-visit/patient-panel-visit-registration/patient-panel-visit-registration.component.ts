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

  loadVisits(): void {
    this.visitService.getVisitsByDate(this.selectedPhysio.physioId, this.selectedDate).subscribe((visitList) => {
      this.visits = visitList;
    });
  }

  onSelect(date): void {
    this.selectedDate = this.visitService.formatDate(date);
    this.loadVisits();
  }

  backToPhysio(): void {
    this.selectedPhysio = null;
    this.visits = null;
    this.selectedDate = null;
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

  onCancelVisit($event: VisitPlace): void {
    this.visitService.cancelVisit(this.selectedPhysio.physioId, {
      timeFrom: $event.timeFrom,
      timeTo: $event.timeTo,
      date: this.selectedDate,
      patientId: this.authService.loggedUser.patientId
    }).subscribe((visit) => {
      this.loadVisits();
      this.toastrService.success('Visit has been cancelled successfully');
    }, () => {
      this.toastrService.error('Failed to cancel visit!');
    });
  }
}
