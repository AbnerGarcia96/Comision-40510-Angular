import { state } from '@angular/animations';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCursoState from './curso-state.reducer';

export const selectCursoState = createFeatureSelector<fromCursoState.CursoState>(
  fromCursoState.cursoStateFeatureKey
);

export const selectCargandoCursos = createSelector(
  selectCursoState,
  (state: fromCursoState.CursoState) => state.cargando
);

export const selectCursosCargados = createSelector(
  selectCursoState,
  (state: fromCursoState.CursoState) => state.cursos
);
