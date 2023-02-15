import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-tabla-cursos',
  templateUrl: './tabla-cursos.component.html',
  styleUrls: ['./tabla-cursos.component.css']
})
export class TablaCursosComponent implements OnInit, OnDestroy {
  dataSource!: MatTableDataSource<Curso>;
  columnas: string[] = ['nombre', 'comision', 'profesor', 'fechaInicio', 'fechaFin', 'inscripcionAbierta', 'acciones']
  suscripcion!: Subscription;

  constructor(
    private cursoService: CursoService
  ){
    
  }

  ngOnInit(): void {
    console.log("Instanciando MatTAbleDataSource");
    this.dataSource = new MatTableDataSource<Curso>();
    this.suscripcion = this.cursoService.obtenerCursosObservable().subscribe((cursos: Curso[]) => {
      console.log("Agregando datos al MatTAbleDataSource");
      this.dataSource.data = cursos;
    });
    console.log("Ultima linea del ngOnInit");
  }

  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }
}
