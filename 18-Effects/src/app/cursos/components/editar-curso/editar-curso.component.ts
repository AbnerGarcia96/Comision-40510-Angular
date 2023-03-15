import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProfesorService } from 'src/app/core/services/profesor.service';
import { Curso } from 'src/app/models/curso';
import { Profesor } from 'src/app/models/profesor';
import { CursosService } from '../../services/cursos.service';
import { editarCursoState } from '../../state/curso-state.actions';
import { CursoState } from '../../state/curso-state.reducer';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit{
  formulario!: FormGroup;
  profesores$!: Observable<Profesor[]>;

  constructor(
    private cursoService: CursosService,
    private router: Router,
    private profesores: ProfesorService,
    private dialogRef: MatDialogRef<EditarCursoComponent>,
    private store: Store<CursoState>,
    @Inject(MAT_DIALOG_DATA) public curso: Curso
  ){}

  ngOnInit(): void {
    this.profesores$ = this.profesores.obtenerProfesores();
    this.formulario = new FormGroup({
      comision: new FormControl(this.curso.comision),
      fechaFin: new FormControl(this.curso.fechaFin),
      fechaInicio: new FormControl(this.curso.fechaInicio),
      inscripcionAbierta: new FormControl(this.curso.inscripcionAbierta),
      nombre: new FormControl(this.curso.nombre),
      profesor: new FormControl(this.curso.profesor)
    })
  }

  editarCurso(){
    let curso: Curso = {
      id: this.curso.id,
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      profesor: this.formulario.value.profesor
    };
    
    this.store.dispatch(editarCursoState({curso: curso}));
    this.dialogRef.close(curso);
  }
}
