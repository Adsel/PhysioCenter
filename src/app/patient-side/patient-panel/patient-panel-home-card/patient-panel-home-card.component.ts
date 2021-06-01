import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-patient-panel-home-card',
  templateUrl: './patient-panel-home-card.component.html',
  styleUrls: ['./patient-panel-home-card.component.scss']
})
export class PatientPanelHomeCardComponent implements OnInit {
  @Input() text: string;
  @Input() src: string;
  @Input() title: string;
  @Input() buttonHref: string;
  @Input() buttonLabel: string;
  @Input() buttonIcon: string;

  constructor() { }

  ngOnInit(): void {
  }

}
