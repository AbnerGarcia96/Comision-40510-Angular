import { createSelector } from "@ngrx/store";
import { CursoState } from "src/app/models/curso.state";
import { AppState } from "./app.state"

export const selectorCurso = (state: AppState) => {
    return state.cursos
};

export const selectorCargandoCursos = createSelector(
    selectorCurso,
    (state: CursoState) => {
        return state.cargando;
    }
)

export const selectorCursosCargados = createSelector(
    selectorCurso,
    (state: CursoState) => {
        return state.cursos;
    }
)