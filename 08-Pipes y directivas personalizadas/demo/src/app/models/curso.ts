import { profesor } from "./profesor";

export interface Curso{
    nombre: string;
    comision: string;
    profesor: profesor;
    inscripcionAbierta: boolean;
    fechaInicio: Date;
    fechaFin: Date;
}