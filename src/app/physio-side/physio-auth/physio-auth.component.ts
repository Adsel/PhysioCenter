import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/auth.service';

@Component({
  selector: 'app-physio-auth',
  templateUrl: './physio-auth.component.html',
  styleUrls: ['./physio-auth.component.scss']
})
export class PhysioAuthComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
