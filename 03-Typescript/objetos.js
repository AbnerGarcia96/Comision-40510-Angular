"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curso_1 = require("./curso");
var estudiante_1 = require("./estudiante");
var persona_1 = require("./persona");
var persona1 = new persona_1.Persona("Abner", "Garcia", 148);
var estudiante1 = new estudiante_1.Estudiante("abner@gmail.com", "asd.123", persona1);
var inscripcion1 = {
    curso: new curso_1.Curso(),
    estudiante: estudiante1
};
console.log(estudiante1.saludar("Lucas"));
