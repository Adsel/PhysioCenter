import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Patient, Physio} from '../../../core/model';

@Component({
  selector: 'app-messenger-direct',
  templateUrl: './messenger-direct.component.html',
  styleUrls: ['./messenger-direct.component.scss']
})
export class MessengerDirectComponent implements OnInit {
  isModalOpen: boolean;
  @Input() isPhysio: boolean;
  @Output() createMessageObjEvent = new EventEmitter<Physio | Patient>();

  constructor() { }

  ngOnInit(): void {
    this.isModalOpen = false;
  }

  toggleModal($event): void {
    this.isModalOpen = !this.isModalOpen;
  }

  createMessageObj($event): void {
    this.createMessageObjEvent.emit($event);
    this.toggleModal($event);
  }
}
