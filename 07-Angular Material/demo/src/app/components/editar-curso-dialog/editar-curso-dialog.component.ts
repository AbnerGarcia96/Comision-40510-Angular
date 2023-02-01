import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-editar-curso-dialog',
  templateUrl: './editar-curso-dialog.component.html',
  styleUrls: ['./editar-curso-dialog.component.css']
})
export class EditarCursoDialogComponent {
  formulario: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditarCursoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Curso
  ){
    this.formulario = new FormGroup({
      nombre: new FormControl(data.nombre === 'Angular' ? 'Este es angular' : data.nombre),
      comision: new FormControl(data.comision),
      profesor: new FormControl(data.profesor)
    });
  }
}
