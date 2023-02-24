import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRountingModule } from './app-rounting.module';
import { CursosModule } from './cursos/cursos.module';
import { NoEncontradoComponent } from './core/components/no-encontrado/no-encontrado.component';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/components/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NoEncontradoComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRountingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
