import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-patient-panel-user',
  templateUrl: './patient-panel-user.component.html',
  styleUrls: ['./patient-panel-user.component.scss']
})
export class PatientPanelUserComponent implements OnInit {
  @Input() passwordInput: string;
  @Input() passwordInputRe: string;
  @Input() inputName: string;
  @Input() inputSurname: string;
  @Input() inputPhone: string;
  @Input() inputEmail: string;
  @Input() inputPesel: string;
  showing: string;

  constructor() { }

  ngOnInit(): void {
    this.showing = 'firstSection';
  }

  changeLoginData(event): void {
    event.preventDefault();
  }

  updatePersonalData(event): void {
    event.preventDefault();
  }

  show(which): void {
    console.log('WHI', which, this.showing);
    if (which === this.showing) {
      this.showing = '';
    } else if (which === 'firstSection') {
      this.showing = 'firstSection';
    } else if (which === 'secondSection') {
      this.showing = 'secondSection';
    }
  }

}
