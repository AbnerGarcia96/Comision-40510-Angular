import { ActionReducerMap } from "@ngrx/store";
import { CursoState } from "src/app/models/curso.state";
import { cursosReducer } from "./cursos.reducers";

export interface AppState{
    cursos: CursoState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    cursos: cursosReducer
}