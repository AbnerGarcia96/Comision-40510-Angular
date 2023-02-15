import { Component } from '@angular/core';
import { Curso } from './models/curso';
import { CursoAlphaService } from './services/curso-alpha.service';
import { CursoService } from './services/curso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  constructor(
    private cursoService: CursoService
  ){

  }

  agregarCurso(){
    let c: Curso = {
      nombre: 'Angular Avanzando',
      comision: '34022',
      fechaInicio: new Date(),
      fechaFin: new Date(),
      inscripcionAbierta: true,
      profesor: {
        nombre: 'Ulises',
        correo: 'ulises@gmail.com',
        fechaRegistro: new Date()
      }
    };
    this.cursoService.agregarCurso(c);
  }
}
