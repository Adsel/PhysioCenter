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
        title: 'specialist',
        header: 'physiotherapist',
        text: 'lorem ipusm etc.',
        href: '/physio'
      }, {
        title: 'user',
        header: 'patient',
        text: 'lorem ipusm etc.',
        href: '/patient'
      }
    ];
  }
}
