import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule} from './auth/auth.module';
import {AuthService} from './core/auth.service';
import {Config, CONFIG} from './core/config';
import {HomeModule} from './home/home.module';
import {PagesModule} from './pages/pages.module';

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
    AuthModule,
    HomeModule,
    PagesModule
  ],
  providers: [
    AuthService,
    { provide: CONFIG, useValue: config }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
