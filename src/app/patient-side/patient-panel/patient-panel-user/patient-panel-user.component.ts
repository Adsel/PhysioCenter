import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-patient-panel-user',
  templateUrl: './patient-panel-user.component.html',
  styleUrls: ['./patient-panel-user.component.scss']
})
export class PatientPanelUserComponent implements OnInit {
  @Input() loginInput: string;
  @Input() passwordInput: string;
  @Input() passwordInputRe: string;

  constructor() { }

  ngOnInit(): void {
  }

  changeLoginData(event): void {
    event.preventDefault();
  }

}
