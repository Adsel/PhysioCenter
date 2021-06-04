import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-patient-panel-visit-calendar',
  templateUrl: './patient-panel-visit-calendar.component.html',
  styleUrls: ['./patient-panel-visit-calendar.component.scss']
})
export class PatientPanelVisitCalendarComponent implements OnInit {
  currentDate: Date;
  minDateValue: Date;
  maxDateValue: Date;
  @Output() backToPhysioEv = new EventEmitter<void>();
  @Output() onSelectDateEv = new EventEmitter<Date>();

  constructor() { }

  ngOnInit(): void {
  }

  backToPhysio(): void {
    this.backToPhysioEv.emit();
  }

  onSelect($event: Date): void {
    this.onSelectDateEv.emit($event);
  }
}
