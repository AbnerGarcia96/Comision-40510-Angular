import { Profesor } from "./profesor";

export interface Curso{
    id: string;
    nombre: string;
    comision: string;
    profesor: Profesor;
    inscripcionAbierta: boolean;
    fechaInicio: Date;
    fechaFin: Date;
}