import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthPhysioGuard} from './auth-physio-guard.service';
import {AuthService} from './auth.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  providers: [
    AuthPhysioGuard,
    AuthService
  ],
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CoreModule { }
