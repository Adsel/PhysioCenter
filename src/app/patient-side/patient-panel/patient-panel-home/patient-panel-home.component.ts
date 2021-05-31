import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-panel-home',
  templateUrl: './patient-panel-home.component.html',
  styleUrls: ['./patient-panel-home.component.scss']
})
export class PatientPanelHomeComponent implements OnInit {
  cards = [
    {
      title: 'Register visit',
      src: 'https://images.pexels.com/photos/5473182/pexels-photo-5473182.jpeg?cs=srgb&dl=pexels-ryutaro-tsukata-5473182.jpg&fm=jpg',
      text: 'Register new visit online!',
      button: { label: 'Go to Visits', icon: 'fas fa-calendar-alt', href: '#' }
    }, {
      title: 'Visits history',
      src: '...',
      text: 'Show visits history',
      button: { label: 'Go to Visit History', icon: 'fas fa-calendar-alt', href: '#' }
    }, {
      title: 'Manage account',
      src: '...',
      text: 'Manage your account data!',
      button: { label: 'Manage', icon: 'fas fa-user', href: '#' }
    }, {
      title: 'Check physiotherapists',
      src: '...',
      text: 'Check our physio list!',
      button: { label: 'Go to Physio List', icon: 'fas fa-glasses', href: '#' }
    }, {
      title: 'Have questions?',
      src: '...',
      text: 'Ask question online!',
      button: { label: 'Ask Question', icon: 'fas fa-question', href: '#' }
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
