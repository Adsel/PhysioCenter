import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthPhysioGuard} from './auth-physio-guard.service';
import {AuthService} from './auth.service';

@NgModule({
  providers: [
    AuthPhysioGuard,
    AuthService
  ],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
