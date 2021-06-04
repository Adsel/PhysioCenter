import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messenger-direct',
  templateUrl: './messenger-direct.component.html',
  styleUrls: ['./messenger-direct.component.scss']
})
export class MessengerDirectComponent implements OnInit {
  isModalOpen: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isModalOpen = false;
  }

  toggleModal($event): void {
    this.isModalOpen = !this.isModalOpen;
  }

}
