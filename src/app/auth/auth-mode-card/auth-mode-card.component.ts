import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-auth-mode-card',
  templateUrl: './auth-mode-card.component.html',
  styleUrls: ['./auth-mode-card.component.scss']
})
export class AuthModeCardComponent implements OnInit {
  @Input() header: string;
  @Input() title: string;
  @Input() text: string;
  @Input() href: string;

  constructor() { }

  ngOnInit(): void {
  }

}
