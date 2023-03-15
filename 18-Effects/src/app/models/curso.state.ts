import { Curso } from "./curso";

export interface CursoState{
    cargando: boolean;
    cursos: Curso[];
}