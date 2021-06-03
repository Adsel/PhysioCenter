import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {MessageObject} from '../../../core/model';
import {MessageService} from '../../../core/message.service';

@Component({
  selector: 'app-messenger-conversation',
  templateUrl: './messenger-conversation.component.html',
  styleUrls: ['./messenger-conversation.component.scss']
})
export class MessengerConversationComponent implements OnInit, OnChanges {
  @Input() activeMessageObject: MessageObject;
  @Input() isPhysio: boolean;

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  loadMessages(): void {
    // this.messageService.getAllMessages();
  }

  ngOnChanges(changes): void {
    console.log('CHANGES', changes);
    if (!!changes.activeMessageObject) {
      this.loadMessages();
    }
  }

}
