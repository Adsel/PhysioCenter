import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Physio} from '../../../../core/model';
import {PatientService} from '../../../../core/patient.service';

@Component({
  selector: 'app-patient-panel-visit-physio',
  templateUrl: './patient-panel-visit-physio.component.html',
  styleUrls: ['./patient-panel-visit-physio.component.scss']
})
export class PatientPanelVisitPhysioComponent implements OnInit {
  physiotherapists: Physio[];
  @Output() onChoosePhysio = new EventEmitter<Physio>();

  constructor(
    private patientService: PatientService,
  ) { }

  ngOnInit(): void {
    this.physiotherapists = [];
    this.patientService.getPhysioList().subscribe((physioList) => {
      this.physiotherapists = physioList;
    });
  }

  choosePhysio(event: Physio): void {
    this.onChoosePhysio.emit(event);
  }
}
