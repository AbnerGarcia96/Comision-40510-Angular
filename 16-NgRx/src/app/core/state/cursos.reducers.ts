import { createReducer, on } from "@ngrx/store";
import { CursoState } from "src/app/models/curso.state";
import { cargarCursos, cursosCargados } from "./cursos.actions";

const estadoInicial: CursoState = {
    cargando: false,
    cursos: []
}

export const cursosReducer = createReducer(
    estadoInicial,
    on(cargarCursos, (state) => {
        const nuevoEstado: CursoState = {
            cargando: true,
            cursos: state.cursos
        } 

        return nuevoEstado
    }),
    on(cursosCargados, (state, { cursos }) => {
        const nuevoEstado: CursoState = {
            cargando: false,
            cursos: cursos
        } 

        return nuevoEstado
    })
);