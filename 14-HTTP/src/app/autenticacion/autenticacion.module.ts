import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { AutenticacionInicioComponent } from './components/autenticacion-inicio/autenticacion-inicio.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AutenticacionInicioComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    SharedModule
  ]
})
export class AutenticacionModule { }
