import { Component } from '@angular/core';
import { Estudiante } from './models/estudiante';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  estudiantes: Estudiante[] = [
    { nombre: 'Fernando', curso: 'Angular', activo: true, notaMedia: 8.2 },
    { nombre: 'Gabriela', curso: 'Angular', activo: true, notaMedia: 2.2 },
    { nombre: 'Mizraim', curso: 'React', activo: false, notaMedia: 4.2 },
    { nombre: 'Pablo', curso: 'React', activo: true, notaMedia: 9.2 },
  ];

  agregarEstudiante(estudiante: Estudiante){
    this.estudiantes.push(estudiante);
  }
}
