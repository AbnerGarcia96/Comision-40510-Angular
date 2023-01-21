import { Component } from '@angular/core';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent {
  cursos: Curso[] = [
    {
      nombre: 'Angular',
      profesor: 'Abner',
      estudiantes: ['Eliseo', 'Mayra', 'Enrique'],
      inscripcionAbierta: false
    },{
      nombre: 'ReactJs',
      profesor: 'Mizraim',
      estudiantes: ['Eliseo', 'Mayra', 'Enrique'],
      inscripcionAbierta: false
    },{
      nombre: 'VueJS',
      profesor: 'Lucas',
      estudiantes: [],
      inscripcionAbierta: true
    },{
      nombre: 'NodeJS',
      profesor: 'Angeles',
      estudiantes: ['Eliseo', 'Mayra', 'Enrique'],
      inscripcionAbierta: true
    }
  ]
}
