import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';
import { cargarCursoState } from '../../state/curso-state.actions';
import { CursoState } from '../../state/curso-state.reducer';

@Component({
  selector: 'app-cursos-inicio',
  templateUrl: './cursos-inicio.component.html',
  styleUrls: ['./cursos-inicio.component.css']
})
export class CursosInicioComponent {
  constructor(
    private store: Store<CursoState>
  ){}
  
  ngOnInit(){
    this.store.dispatch(cargarCursoState());
  }
}
