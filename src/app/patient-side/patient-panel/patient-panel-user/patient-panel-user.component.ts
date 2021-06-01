import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../core/auth.service';
import {PatientService} from '../../../core/patient.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-patient-panel-user',
  templateUrl: './patient-panel-user.component.html',
  styleUrls: ['./patient-panel-user.component.scss']
})
export class PatientPanelUserComponent implements OnInit {
  passwordInput: string;
  passwordInputRe: string;
  inputName: string;
  inputSurname: string;
  inputPhone: string;
  inputEmail: string;
  inputPesel: string;
  userId: number;
  showing: string;

  constructor(
    private authService: AuthService,
    private patientService: PatientService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.showing = 'firstSection';
    this.loadUserData();
  }

  private loadUserData(): void {
    if (this.authService.loggedUser) {
      this.userId = this.authService.loggedUser.userId;
      this.patientService.getPatientData(this.userId).subscribe((patient) => {
        this.inputName = patient.name;
        this.inputSurname = patient.surname;
        this.inputPhone = patient.phoneNumber;
        this.inputEmail = patient.email;
        this.inputPesel = patient.peselNo;
      });
    }
  }

  changeLoginData(event): void {
    event.preventDefault();
  }

  updatePersonalData(event): void {
    event.preventDefault();
    const userData = {
      patientId: this.userId,
      name: this.inputName,
      surname: this.inputSurname,
      phoneNumber: this.inputPhone,
      email: this.inputEmail,
      peselNo: this.inputPesel
    };
    this.patientService.updatePatientData(this.userId, userData).subscribe(() => {
      this.toastrService.success('Data have been updated!');
    });
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
