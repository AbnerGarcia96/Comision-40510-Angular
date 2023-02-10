import { Component, Inject, OnInit } from '@angular/core';
import { token } from 'src/app/config';
import { Configuracion } from 'src/app/models/configuracion';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit{
  cursos!: Curso[];

  constructor(
    private cursoService: CursoService,
    @Inject(token) private config: Configuracion
  ){}

  ngOnInit(): void {
    this.cursos = this.cursoService.obtenerCursos();

    console.log(this.config.urlAPI, this.config.servicios.cursoService, this.config.servicios.usuarioService);
  }
}
