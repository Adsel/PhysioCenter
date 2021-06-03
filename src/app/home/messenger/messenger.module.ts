import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessengerPanelComponent } from './messenger-panel/messenger-panel.component';
import {PatientPanelModule} from '../../patient-side/patient-panel/patient-panel.module';
import { MessengerObjectsComponent } from './messenger-objects/messenger-objects.component';
import { MessengerConversationComponent } from './messenger-conversation/messenger-conversation.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    MessengerPanelComponent,
    MessengerObjectsComponent,
    MessengerConversationComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    PatientPanelModule
  ]
})
export class MessengerModule { }
