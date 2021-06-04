import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-messenger-choose-contact',
  templateUrl: './messenger-choose-contact.component.html',
  styleUrls: ['./messenger-choose-contact.component.scss']
})
export class MessengerChooseContactComponent implements OnInit {
  @Input() isDialogOpen: boolean;
  @Output() closeDialogEvent = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.closeDialogEvent.emit();
  }

}
