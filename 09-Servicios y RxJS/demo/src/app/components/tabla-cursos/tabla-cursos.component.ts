import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-tabla-cursos',
  templateUrl: './tabla-cursos.component.html',
  styleUrls: ['./tabla-cursos.component.css']
})
export class TablaCursosComponent {
  cursos!: Curso[];
  dataSource!: MatTableDataSource<Curso>;
  columnas: string[] = ['nombre', 'comision', 'profesor', 'fechaInicio', 'fechaFin', 'inscripcionAbierta', 'acciones']
  
  constructor(
    private cursoService: CursoService
  ){
    
  }

  ngOnInit(): void {
    this.cursos = this.cursoService.obtenerCursos();
    this.dataSource = new MatTableDataSource<Curso>(this.cursos);
  }
}
