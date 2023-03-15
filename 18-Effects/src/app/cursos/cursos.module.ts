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
import { StoreModule } from '@ngrx/store';
import { cursoStateFeatureKey, reducer } from './state/curso-state.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CursosEffects } from './state/curso-state.effects';

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
    ReactiveFormsModule,
    StoreModule.forFeature(cursoStateFeatureKey, reducer),
    EffectsModule.forFeature([CursosEffects])
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
