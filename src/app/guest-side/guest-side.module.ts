import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestSidePhysioComponent } from './guest-side-physio/guest-side-physio.component';
import {RouterModule} from '@angular/router';
import { GuestSideNavbarComponent } from './guest-side-navbar/guest-side-navbar.component';

const routes = [
  { path: 'guest', component: GuestSidePhysioComponent }
];

@NgModule({
  declarations: [
    GuestSidePhysioComponent,
    GuestSideNavbarComponent
  ],
  exports: [
    GuestSideNavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class GuestSideModule { }
