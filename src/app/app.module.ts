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

const config: Config = {
  apiUrl: 'http://localhost:8080/api'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhysioSideModule,
    AuthModule,
    HomeModule
  ],
  providers: [
    AuthService,
    { provide: CONFIG, useValue: config }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
