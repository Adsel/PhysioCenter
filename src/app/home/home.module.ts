import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import {RouterModule} from '@angular/router';
import {AuthModule} from '../auth/auth.module';

const routes = [
  { path: 'home', component: MainPageComponent }
];

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AuthModule,
  ]
})
export class HomeModule { }
