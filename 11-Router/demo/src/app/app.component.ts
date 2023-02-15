import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    private cursoService: CursoService,
    private router: Router
  ){

  } 

  redigirInicio(){
    this.router.navigate(['inicio', { mensaje: 'Hola', usuario: 'Abner' }]);
  }
}
