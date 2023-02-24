import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Curso } from 'src/app/models/curso';
import { Sesion } from 'src/app/models/sesion';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit{
  cursos!: Curso[];
  cursos$!: Observable<Curso[]>;
  sesion$!: Observable<Sesion>

  constructor(
    private cursoService: CursosService,
    private router: Router,
    private sesion: SesionService
  ){}

  ngOnInit() {
    this.cursos$ = this.cursoService.obtenerCursos();
    this.sesion$ = this.sesion.obtenerSesion();
  }

  eliminarCurso(curso: Curso){
    this.cursoService.eliminarCurso(curso);
  }

  redirigirEditarCurso(curso: Curso){
    this.router.navigate(['cursos/editar', curso]);
  }
}
