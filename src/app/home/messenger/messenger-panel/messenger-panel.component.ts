import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../../core/auth.service';
import {MessageService} from '../../../core/message.service';
import {MessageObject} from '../../../core/model';

@Component({
  selector: 'app-messenger-panel',
  templateUrl: './messenger-panel.component.html',
  styleUrls: ['./messenger-panel.component.scss']
})
export class MessengerPanelComponent implements OnInit {
  isPhysio: boolean;
  messageObjects: MessageObject[];
  activeMessageObject: MessageObject;

  constructor(
    private authService: AuthService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.isPhysio = !!this.authService.loggedUser && this.authService.loggedUser.isPhysio;
    this.messageService.getLastMessages(this.authService.loggedUser.userId).subscribe((response) => {
      this.messageObjects = response.lastMessages;
    });
  }

  changeActiveObject(messageObject: MessageObject): void {
    console.log('CHANGE', messageObject);
    this.activeMessageObject = messageObject;
  }

}
