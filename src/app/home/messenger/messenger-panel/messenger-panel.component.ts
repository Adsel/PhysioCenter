import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../../core/auth.service';
import {MessageService} from '../../../core/message.service';
import {MessageObject, Patient, Physio} from '../../../core/model';
import {PhysioService} from '../../../core/physio.service';

@Component({
  selector: 'app-messenger-panel',
  templateUrl: './messenger-panel.component.html',
  styleUrls: ['./messenger-panel.component.scss']
})
export class MessengerPanelComponent implements OnInit {
  isPhysio: boolean;
  messageObjects: MessageObject[];
  activeMessageObject: MessageObject;
  newDirectMessage: boolean;

  constructor(
    private authService: AuthService,
    private messageService: MessageService
  ) { }

  getLastMessages(): void {
    this.messageService.getLastMessages(this.authService.loggedUser.userId).subscribe((response) => {
      this.messageObjects = response.lastMessages;
    });
  }

  ngOnInit(): void {
    this.isPhysio = !!this.authService.loggedUser && !!this.authService.loggedUser.physioId;
    this.getLastMessages();
    this.newDirectMessage = false;
  }

  changeActiveObject(messageObject: MessageObject): void {
    this.activeMessageObject = messageObject;
  }

  newContact(contact: Patient | Physio): void {
    const patient = this.isPhysio ? (contact as Patient) : { patientId: this.authService.loggedUser.patientId };
    const physio = !this.isPhysio ? (contact as Physio) : { physioId: this.authService.loggedUser.physioId };
    this.activeMessageObject = {
      message: null,
      patient,
      physio
    };
  }

}
