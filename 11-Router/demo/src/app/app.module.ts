import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { CursoService } from './services/curso.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TablaCursosComponent } from './components/tabla-cursos/tabla-cursos.component';
import { CursoAlphaService } from './services/curso-alpha.service';
import { cursos } from './services/cursos.data';
import { env } from 'src/environment/environment';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AppRountingModule } from './app-rounting.module';
import { DetalleCursoComponent } from './components/detalle-curso/detalle-curso.component';
import { AgregarCursoComponent } from './compoents/agregar-curso/agregar-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCursosComponent,
    TablaCursosComponent,
    NoEncontradoComponent,
    InicioComponent,
    DetalleCursoComponent,
    AgregarCursoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRountingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
