import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NoEncontradoComponent,
    InicioComponent
  ],
  imports: [
    HttpClientModule
  ],
  exports: [
    NoEncontradoComponent,
    InicioComponent,
    HttpClientModule
  ]
})
export class CoreModule { }
