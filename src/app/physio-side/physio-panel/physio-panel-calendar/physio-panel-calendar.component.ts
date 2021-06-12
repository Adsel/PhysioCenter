import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-physio-panel-calendar',
  templateUrl: './physio-panel-calendar.component.html',
  styleUrls: ['./physio-panel-calendar.component.scss']
})
export class PhysioPanelCalendarComponent implements OnInit {
  @Output() onSelectedEv = new EventEmitter<Date>();
  currentDate: Date;
  minDateValue: Date;
  maxDateValue: Date;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect($event: Date): void {
    this.onSelectedEv.emit($event);
  }

}
