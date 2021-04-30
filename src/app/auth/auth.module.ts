import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModeComponent } from './auth-mode/auth-mode.component';
import {RouterModule} from '@angular/router';
import { AuthModeCardComponent } from './auth-mode-card/auth-mode-card.component';

const routes = [];

@NgModule({
  declarations: [
    AuthModeComponent,
    AuthModeCardComponent
  ],
  exports: [
    AuthModeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AuthModule { }
