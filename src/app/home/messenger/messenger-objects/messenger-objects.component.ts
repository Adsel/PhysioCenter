import {Component, Input, OnInit} from '@angular/core';
import {MessageObject} from '../../../core/model';

@Component({
  selector: 'app-messenger-objects',
  templateUrl: './messenger-objects.component.html',
  styleUrls: ['./messenger-objects.component.scss']
})
export class MessengerObjectsComponent implements OnInit {
  @Input() messageObjects: MessageObject[] | null;
  @Input() isPhysio: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  messageTo($event: MouseEvent, patientId: number, physioId: number): void {
    $event.preventDefault();
  }
}
