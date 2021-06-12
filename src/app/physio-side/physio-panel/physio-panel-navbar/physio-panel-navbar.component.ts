import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../core/auth.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-physio-panel-navbar',
  templateUrl: './physio-panel-navbar.component.html',
  styleUrls: ['./physio-panel-navbar.component.scss']
})
export class PhysioPanelNavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logoutPhysio(): void {
    this.authService.logoutUser();
    this.toastrService.info('Logout successful');
    this.router.navigate(['/home']);
  }
}
