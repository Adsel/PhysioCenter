import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../core/auth.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-patient-panel-navbar',
  templateUrl: './patient-panel-navbar.component.html',
  styleUrls: ['./patient-panel-navbar.component.scss']
})
export class PatientPanelNavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  logoutPatient(): void {
    this.authService.logoutUser();
    this.toastr.info('Logout successful');
  }

}
