import {Component, Input, OnInit} from '@angular/core';
import {Physio, VisitPlace} from '../../../../core/model';
import {AuthService} from '../../../../core/auth.service';

@Component({
  selector: 'app-patient-panel-visit-list',
  templateUrl: './patient-panel-visit-list.component.html',
  styleUrls: ['./patient-panel-visit-list.component.scss']
})
export class PatientPanelVisitListComponent implements OnInit {
  @Input() visits: VisitPlace[];
  @Input() date: string;
  @Input() physio: Physio;
  patientId: number;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.patientId = this.authService.loggedUser.patientId;
  }

}
