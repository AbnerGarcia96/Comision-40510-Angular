import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit{
  cursos!: Curso[];
  cursos$!: Observable<Curso[]>;

  constructor(
    private cursoService: CursosService,
    private router: Router
  ){}

  ngOnInit() {
    this.cursos$ = this.cursoService.obtenerCursos();
  }

  eliminarCurso(curso: Curso){
    this.cursoService.eliminarCurso(curso);
  }

  redirigirEditarCurso(curso: Curso){
    this.router.navigate(['cursos/editar', curso]);
  }
}
