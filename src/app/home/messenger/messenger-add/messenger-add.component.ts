import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MessageService} from '../../../core/message.service';
import {MessageObject} from '../../../core/model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-messenger-add',
  templateUrl: './messenger-add.component.html',
  styleUrls: ['./messenger-add.component.scss']
})
export class MessengerAddComponent implements OnInit {
  @Input() activeMessageObject: MessageObject;
  @Input() isPhysio: boolean;
  @Output() sentMessage = new EventEmitter<boolean>();
  messageInput: string;

  constructor(
    private toastrService: ToastrService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  sendMessage($event: MouseEvent): void {
    $event.preventDefault();
    const newMessage = {
      patientId: this.activeMessageObject.patient.patientId,
      physioId: this.activeMessageObject.physio.physioId,
      directionToPhysio: this.isPhysio,
      message: this.messageInput.trim()
    };

    this.messageService.sendMessage(newMessage).subscribe((message) => {
      if (!!message) {
        this.sentMessage.emit(true);
        this.messageInput = '';
        this.toastrService.success('Message has been sent');
      }
    }, (error) => {
      this.toastrService.error('Failed to send message!');
    });
  }
}
