import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/auth.service';

@Component({
  selector: 'app-patient-auth',
  templateUrl: './patient-auth.component.html',
  styleUrls: ['./patient-auth.component.scss']
})
export class PatientAuthComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }


  ngOnInit(): void {
  }

}
