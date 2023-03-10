import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Curso } from 'src/app/models/curso';
import { Sesion } from 'src/app/models/sesion';
import { cargarCursoState, cursosCargados } from '../../curso-state.actions';
import { CursoState } from '../../curso-state.reducer';
import { selectCargandoCursos, selectCursosCargados } from '../../curso-state.selectors';
import { CursosService } from '../../services/cursos.service';
import { EditarCursoComponent } from '../editar-curso/editar-curso.component';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit{
  cursos!: Curso[];
  cursos$!: Observable<Curso[]>;
  sesion$!: Observable<Sesion>
  cargando$!: Observable<Boolean>;

  constructor(
    private cursoService: CursosService,
    private router: Router,
    private sesion: SesionService,
    private dialog: MatDialog,
    private store: Store<CursoState>
  ){}

  ngOnInit() {
    this.cargando$ = this.store.select(selectCargandoCursos);

    this.store.dispatch(cargarCursoState());

    this.cursoService.obtenerCursos().subscribe((cursos: Curso[]) => {
      this.store.dispatch(cursosCargados({ cursos: cursos }));
    });
    
    this.cursos$ = this.store.select(selectCursosCargados);
    this.sesion$ = this.sesion.obtenerSesion();
  }

  eliminarCurso(curso: Curso){
    this.cursoService.eliminarCurso(curso).subscribe((curso: Curso) => {
      alert(`${curso.nombre} eliminado`);
      this.cursos$ = this.cursoService.obtenerCursos();
    });
  }

  abrirDialog(curso: Curso){
    this.dialog.open(EditarCursoComponent, {
      data: curso
    }).afterClosed().subscribe((curso: Curso) => {
      alert(`${curso.nombre} editado satisfactoriamente`);
      this.cursos$ = this.cursoService.obtenerCursos();
    });
  }
}
