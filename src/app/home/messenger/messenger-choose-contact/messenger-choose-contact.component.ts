import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Patient, Physio} from '../../../core/model';
import {PatientService} from '../../../core/patient.service';
import {PhysioService} from '../../../core/physio.service';

@Component({
  selector: 'app-messenger-choose-contact',
  templateUrl: './messenger-choose-contact.component.html',
  styleUrls: ['./messenger-choose-contact.component.scss']
})
export class MessengerChooseContactComponent implements OnInit {
  @Input() isDialogOpen: boolean;
  @Output() closeDialogEvent = new EventEmitter<void>();
  @Output() chooseContactEvent = new EventEmitter<Patient | Physio>();
  @Input() isPhysio: boolean;
  patientList: Patient[];
  physioList: Physio[];
  choosedPatient: Patient;
  choosedPhysio: Physio;

  constructor(
    private patientService: PatientService,
    private physioService: PhysioService
  ) { }

  ngOnInit(): void {
    if (!this.isPhysio) {
      this.patientService.getPhysioList().subscribe((physioList) => (this.physioList = physioList));
    } else {
      this.physioService.getPatientList().subscribe((patientList) => (this.patientList = patientList));
    }
  }

  closeDialog(): void {
    this.closeDialogEvent.emit();
  }

  choosePhysio(physio: Physio): void {
    this.choosedPhysio = physio;
  }

  choosePatient(patient: Patient): void {
    this.choosedPatient = patient;
  }

  chooseContact(): void {
    this.chooseContactEvent.emit(this.isPhysio ? this.choosedPatient : this.choosedPhysio);
  }
}
