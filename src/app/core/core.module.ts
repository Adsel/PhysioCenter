import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthPhysioGuard} from './auth-physio-guard.service';
import {AuthService} from './auth.service';
import {HttpClientModule} from '@angular/common/http';
import { TimeCutterPipe } from './pipes/time-cutter.pipe';

@NgModule({
  providers: [
    AuthPhysioGuard,
    AuthService
  ],
  declarations: [
    TimeCutterPipe
  ],
  exports: [
    TimeCutterPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CoreModule { }
