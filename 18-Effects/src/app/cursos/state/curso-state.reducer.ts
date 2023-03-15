import { Action, createReducer, on } from '@ngrx/store';
import { Curso } from '../../models/curso';
import * as CursoStateActions from './curso-state.actions';

export const cursoStateFeatureKey = 'cursoState';

export interface CursoState {
  cargando: boolean;
  cursos: Curso[];
}

export const initialState: CursoState = {
  cargando: false,
  cursos: []
};

export const reducer = createReducer(
  initialState,
  on(CursoStateActions.cargarCursoState, (state) => {
    return {...state, cargando: true};
  }), 
  on(CursoStateActions.cursosCargados, (state, { cursos }) => {
    return {...state, cargando: false, cursos};
  }),
  on(CursoStateActions.agregarCursoState, (state, { curso: Curso }) => {
    return state;
  }),
  on(CursoStateActions.editarCursoState, (state, { curso: Curso }) => {
    return state;
  }),
  on(CursoStateActions.eliminarCursoState, (state, { curso: Curso }) => {
    return state;
  }),
);
