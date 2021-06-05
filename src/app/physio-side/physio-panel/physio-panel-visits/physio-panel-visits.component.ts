import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Patient, VisitPlace} from '../../../core/model';
import {VisitService} from '../../../core/visit.service';
import {AuthService} from '../../../core/auth.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-physio-panel-visits',
  templateUrl: './physio-panel-visits.component.html',
  styleUrls: ['./physio-panel-visits.component.scss']
})
export class PhysioPanelVisitsComponent implements OnInit {
  selectedDate: string;
  visits: VisitPlace[];
  physioId: number;

  constructor(
    private visitService: VisitService,
    private authService: AuthService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.physioId = this.authService.loggedUser.physioId;
  }

  loadVisits(): void {
    this.visitService.getVisitsByDate(this.physioId, this.selectedDate).subscribe((visitList) => {
      this.visits = visitList;
    }, error => {
      this.toastrService.error('Failed to load visits.');
    });
  }

  onSelected($event: Date): void {
    this.selectedDate = this.visitService.formatDate($event);
    this.loadVisits();
  }

  backToCalendar($event: void): void {
    this.selectedDate = null;
    this.visits = null;
  }

  cancelVisit(event: VisitPlace): void {
    this.visitService.cancelVisit(this.physioId, {
      timeFrom: event.timeFrom,
      timeTo: event.timeTo,
      date: this.selectedDate
    }).subscribe(() => {
      this.loadVisits();
      this.toastrService.success('Visit has been cancelled!');
    }, () => {
      this.toastrService.error('Visit hasn\'t been cancelled');
    });
  }
}
