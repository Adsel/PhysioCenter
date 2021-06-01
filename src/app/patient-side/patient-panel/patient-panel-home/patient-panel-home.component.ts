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
      src: 'https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4506109.jpg&fm=jpg',
      text: 'Show visits history',
      button: { label: 'Go to Visit History', icon: 'fas fa-calendar-alt', href: '#' }
    }, {
      title: 'Manage account',
      src: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      text: 'Manage your account data!',
      button: { label: 'Manage', icon: 'fas fa-user', href: '#' }
    }, {
      title: 'Check physiotherapists',
      src: 'https://cdn.pixabay.com/photo/2021/05/29/01/55/physical-therapy-6292317_960_720.jpg',
      text: 'Check our physio list!',
      button: { label: 'Go to Physio List', icon: 'fas fa-glasses', href: '#' }
    }, {
      title: 'Have questions?',
      src: 'https://cdn.pixabay.com/photo/2015/03/24/12/42/woman-687560_960_720.jpg',
      text: 'Ask question online!',
      button: { label: 'Ask Question', icon: 'fas fa-question', href: '#' }
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
