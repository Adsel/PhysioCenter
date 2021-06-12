import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-physio-auth-login',
  templateUrl: './physio-auth-login.component.html',
  styleUrls: ['./physio-auth-login.component.scss']
})
export class PhysioAuthLoginComponent implements OnInit {
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
    this.authService.loginPhysio({
      login: this.loginInput,
      password: this.passwordInput
    }).subscribe((response) => {
      this.authService.loginUser(response.user);
      this.router.navigate(['/physio']);
    }, () => {
      this.isInvalid = true;
    });
  }
}
