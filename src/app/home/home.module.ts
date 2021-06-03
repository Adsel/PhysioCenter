import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import {RouterModule} from '@angular/router';
import {AuthModule} from '../auth/auth.module';
import {PatientPanelModule} from '../patient-side/patient-panel/patient-panel.module';
import {MessengerPanelComponent} from './messenger/messenger-panel/messenger-panel.component';
import {MessengerModule} from './messenger/messenger.module';

const routes = [
  { path: 'home', component: MainPageComponent },
  { path: 'messanger', component: MessengerPanelComponent }
];

@NgModule({
  declarations: [
    MainPageComponent,
  ],
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
      AuthModule,
      PatientPanelModule,
      MessengerModule
    ]
})
export class HomeModule { }
