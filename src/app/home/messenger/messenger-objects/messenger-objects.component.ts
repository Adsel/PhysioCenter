import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {MessageObject} from '../../../core/model';

@Component({
  selector: 'app-messenger-objects',
  templateUrl: './messenger-objects.component.html',
  styleUrls: ['./messenger-objects.component.scss']
})
export class MessengerObjectsComponent implements OnInit {
  @Input() messageObjects: MessageObject[] | null;
  @Input() isPhysio: boolean;
  @Output() activeMessageObjectChange = new EventEmitter<MessageObject>();

  constructor() { }

  ngOnInit(): void {
  }

  messageTo($event: MouseEvent, messageObj: MessageObject): void {
    $event.preventDefault();
    this.activeMessageObjectChange.emit(messageObj);
  }
}
