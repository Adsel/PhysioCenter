import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/auth.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.scss']
})
export class PatientRegistrationComponent implements OnInit {
  loginInput: string;
  passwordInput: string;
  emailInput: string;
  nameInput: string;
  surnameInput: string;
  phoneInput: string;
  peselInput: string;
  public isInvalid = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  register(event): void {
    event.preventDefault();
    this.authService.registerPatient({
      login: this.loginInput,
      password: this.passwordInput,
      email: this.emailInput,
      name: this.nameInput,
      surname: this.surnameInput,
      phoneNumber: this.phoneInput,
      peselNo: this.peselInput
    }).subscribe((response) => {
       this.router.navigate(['/patient']);
       this.toastr.success('You can login in your account', 'Patient has been registered!');
    }, () => {
      this.isInvalid = true;
      this.toastr.error('Something gone wrong!', 'Unable to create account!');
    });
  }

}
