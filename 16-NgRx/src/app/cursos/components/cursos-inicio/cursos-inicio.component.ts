import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/state/app.state';
import { cargarCursos, cursosCargados } from 'src/app/core/state/cursos.actions';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-cursos-inicio',
  templateUrl: './cursos-inicio.component.html',
  styleUrls: ['./cursos-inicio.component.css']
})
export class CursosInicioComponent {
  constructor(
    private store: Store<AppState>,
    private cursoService: CursosService
  ){}
  
  ngOnInit(){
    
  }
}
