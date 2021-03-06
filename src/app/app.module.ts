import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule} from './auth/auth.module';
import {AuthService} from './core/auth.service';
import {Config, CONFIG} from './core/config';
import {HomeModule} from './home/home.module';
import {CoreModule} from './core/core.module';
import {PhysioSideModule} from './physio-side/physio-side.module';
import {HttpHeaders} from '@angular/common/http';
import {PagesModule} from './pages/pages.module';
import {PatientSideModule} from './patient-side/patient-side.module';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GuestSideModule} from './guest-side/guest-side.module';

const config: Config = {
  apiUrl: 'http://localhost:8080/api',
  headersConfig: new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*'),
  messageRefreshCycle: 10000
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    PhysioSideModule,
    PatientSideModule,
    GuestSideModule,
    AuthModule,
    HomeModule,
    PagesModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass : 'toast-bottom-right'
    })
  ],
  providers: [
    AuthService,
    { provide: CONFIG, useValue: config }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
