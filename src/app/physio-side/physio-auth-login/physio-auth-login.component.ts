import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/auth.service';

@Component({
  selector: 'app-physio-auth-login',
  templateUrl: './physio-auth-login.component.html',
  styleUrls: ['./physio-auth-login.component.scss']
})
export class PhysioAuthLoginComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login(event): void {
    event.preventDefault();
    this.authService.login();
  }
}
