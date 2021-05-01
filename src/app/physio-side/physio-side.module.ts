import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhysioAuthComponent } from './physio-auth/physio-auth.component';
import {RouterModule} from '@angular/router';
import { PhysioAuthLoginComponent } from './physio-auth-login/physio-auth-login.component';

const routes = [
  { path: 'physio', component: PhysioAuthComponent }
  // { path: 'physio/example', component: PhysioAuthComponent, canActivate: [AuthPhysioGuard },
];

@NgModule({
  declarations: [
    PhysioAuthComponent,
    PhysioAuthLoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PhysioSideModule { }
