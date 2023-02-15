import { Profesor } from "./profesor";

export interface Curso{
    nombre: string;
    comision: string;
    profesor: Profesor;
    inscripcionAbierta: boolean;
    fechaInicio: Date;
    fechaFin: Date;
}