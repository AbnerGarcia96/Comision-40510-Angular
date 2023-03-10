import { createAction, props } from "@ngrx/store"
import { Curso } from "src/app/models/curso";

export const cargarCursos = createAction(
    '[Lista Cursos] Cargar cursos'
);

export const cursosCargados = createAction(
    '[Lista Cursos] Cursos cargados',
    props<{ cursos: Curso[] }>()
);