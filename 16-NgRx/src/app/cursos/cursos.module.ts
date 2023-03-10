import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { DetalleCursoComponent } from './components/detalle-curso/detalle-curso.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { MaterialModule } from '../material.module';
import { CursosRountingModule } from './cursos-routing.module';
import { CursosService } from './services/cursos.service';
import { TablaCursosComponent } from './components/tabla-cursos/tabla-cursos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CursosInicioComponent } from './components/cursos-inicio/cursos-inicio.component';



@NgModule({
  declarations: [
    AgregarCursoComponent,
    DetalleCursoComponent,
    ListaCursosComponent,
    EditarCursoComponent,
    TablaCursosComponent,
    CursosInicioComponent
  ],
  imports: [
    CommonModule,
    CursosRountingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
