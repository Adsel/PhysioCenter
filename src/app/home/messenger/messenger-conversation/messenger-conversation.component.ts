import {Component, Inject, Input, OnChanges, OnInit} from '@angular/core';
import {Message, MessageObject} from '../../../core/model';
import {MessageService} from '../../../core/message.service';
import {Config, CONFIG} from '../../../core/config';

@Component({
  selector: 'app-messenger-conversation',
  templateUrl: './messenger-conversation.component.html',
  styleUrls: ['./messenger-conversation.component.scss']
})
export class MessengerConversationComponent implements OnInit, OnChanges {
  @Input() activeMessageObject: MessageObject;
  @Input() isPhysio: boolean;
  messages: Message[];

  constructor(
    private messageService: MessageService,
    @Inject(CONFIG) private config: Config
  ) { }

  ngOnInit(): void {
    setInterval(() => {
      this.loadMessages();
    }, this.config.messageRefreshCycle);
  }

  loadMessages(): void {
    if (this.activeMessageObject) {
      const contact = this.activeMessageObject;
      this.messageService.getMessagesWith(contact.patient.patientId, contact.physio.physioId).subscribe((messages) => {
        this.messages = messages;
      });
    }
  }

  ngOnChanges(changes): void {
    if (!!changes.activeMessageObject) {
      this.loadMessages();
    }
  }

  onSentMessage(flag): void {
    if (flag) {
      this.loadMessages();
    }
  }

}
