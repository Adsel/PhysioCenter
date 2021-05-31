import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../core/auth.service';

@Component({
  selector: 'app-patient-auth-login',
  templateUrl: './patient-auth-login.component.html',
  styleUrls: ['./patient-auth-login.component.scss']
})
export class PatientAuthLoginComponent implements OnInit {
  isInvalid: boolean;
  loginInput: string;
  passwordInput: string;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.isInvalid = false;
  }

  login(event): void {
    event.preventDefault();
    this.authService.loginPatient({
      login: this.loginInput,
      password: this.passwordInput
    }).subscribe((response) => {
      this.authService.loginUser(response.user);
      this.router.navigate(['/patient']);
    }, () => {
      this.isInvalid = true;
    });
  }

}
