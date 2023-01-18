"use strict";
exports.__esModule = true;
var estudiante_1 = require("./estudiante");
var persona_1 = require("./persona");
var persona1 = new persona_1.Persona("Abner", "Garcia", 148);
var estudiante1 = new estudiante_1.Estudiante("abner@gmail.com", "asd.123", persona1.getNombre(), persona1.getEdad(), persona1.getApellido());
console.log(estudiante1.saludar("Lucas"));
