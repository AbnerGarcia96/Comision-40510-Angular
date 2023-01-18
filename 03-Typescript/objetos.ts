import { Estudiante } from './estudiante';
import { Persona } from './persona';

let persona1: Persona = new Persona("Abner", "Garcia", 148);
let estudiante1: Estudiante = new Estudiante("abner@gmail.com", "asd.123", persona1);

console.log(estudiante1.saludar("Lucas"))