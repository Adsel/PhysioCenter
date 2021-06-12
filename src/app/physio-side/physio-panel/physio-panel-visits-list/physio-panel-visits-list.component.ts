import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {VisitPlace} from '../../../core/model';
import {AuthService} from '../../../core/auth.service';
import {VisitService} from '../../../core/visit.service';

@Component({
  selector: 'app-physio-panel-visits-list',
  templateUrl: './physio-panel-visits-list.component.html',
  styleUrls: ['./physio-panel-visits-list.component.scss']
})
export class PhysioPanelVisitsListComponent implements OnInit {
  @Input() visits: VisitPlace[];
  @Input() date: Date;
  currentDate: string;
  @Output() backToCalendarEv = new EventEmitter<void>();
  @Output() cancelVisit = new EventEmitter<VisitPlace>();
  physioId: number;

  constructor(
    private authService: AuthService,
    private visitService: VisitService,
  ) { }

  ngOnInit(): void {
    this.physioId = this.authService.loggedUser.physioId;
    this.currentDate = this.visitService.formatDate(this.date);
  }

  backToCalendar(): void {
    this.backToCalendarEv.emit();
  }

  cancel(event: VisitPlace): void {
    this.cancelVisit.emit(event);
  }
}

