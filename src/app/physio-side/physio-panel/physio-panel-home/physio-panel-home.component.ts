import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-physio-panel-home',
  templateUrl: './physio-panel-home.component.html',
  styleUrls: ['./physio-panel-home.component.scss']
})
export class PhysioPanelHomeComponent implements OnInit {
  cards = [
    {
      title: 'Show visit calendar',
      src: 'https://images.pexels.com/photos/5473182/pexels-photo-5473182.jpeg?cs=srgb&dl=pexels-ryutaro-tsukata-5473182.jpg&fm=jpg',
      text: 'Display all visit to you!',
      button: { label: 'Show Visits', icon: 'fas fa-calendar-alt', href: '/physio/visit' }
    }, {
      title: 'Patients',
      src: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      text: 'Display patient cards!',
      button: { label: 'Show Patients', icon: 'fas fa-user', href: '/physio/patients' }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
