import { Component } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
  subtitulo: string = "Este es un ejemplo de interpolacion mediante {{ }}";
  variable1: number = 5;
  estudianteActual: Estudiante = {
    nombre: 'Jose',
    edad: 22,
    estaActivo: true
  };
  listaEstudiantes: Estudiante[] = [
    {
      nombre: 'José',
      edad: 22,
      estaActivo: true
    },
    {
      nombre: 'Monica',
      edad: 25,
      estaActivo: false
    },
    {
      nombre: 'Edgardo',
      edad: 30,
      estaActivo: true
    }
  ];

}
