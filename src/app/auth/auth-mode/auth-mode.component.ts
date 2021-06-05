import {Component, OnInit} from '@angular/core';
import {AuthModeCard} from '../../core/model';

@Component({
  selector: 'app-auth-mode',
  templateUrl: './auth-mode.component.html',
  styleUrls: ['./auth-mode.component.scss']
})
export class AuthModeComponent implements OnInit {
  public authModes: AuthModeCard[];

  constructor() {
  }

  ngOnInit(): void {
    this.authModes = [
      {
        title: 'user',
        header: 'patient',
        text: 'Log in as patient to view features',
        href: '/patient'
      },
      {
        title: 'specialist',
        header: 'physiotherapist',
        text: 'Manage your visits with patients',
        href: '/physio'
      }
    ];
  }
}
