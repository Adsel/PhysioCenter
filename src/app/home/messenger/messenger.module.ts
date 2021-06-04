import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessengerPanelComponent } from './messenger-panel/messenger-panel.component';
import {PatientPanelModule} from '../../patient-side/patient-panel/patient-panel.module';
import { MessengerObjectsComponent } from './messenger-objects/messenger-objects.component';
import { MessengerConversationComponent } from './messenger-conversation/messenger-conversation.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { MessengerAddComponent } from './messenger-add/messenger-add.component';
import { MessengerDirectComponent } from './messenger-direct/messenger-direct.component';
import { MessengerChooseContactComponent } from './messenger-choose-contact/messenger-choose-contact.component';



@NgModule({
  declarations: [
    MessengerPanelComponent,
    MessengerObjectsComponent,
    MessengerConversationComponent,
    MessengerAddComponent,
    MessengerDirectComponent,
    MessengerChooseContactComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    PatientPanelModule
  ]
})
export class MessengerModule { }
