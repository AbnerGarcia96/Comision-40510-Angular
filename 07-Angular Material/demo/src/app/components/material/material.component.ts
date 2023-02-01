import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/models/curso';
import { EditarCursoDialogComponent } from '../editar-curso-dialog/editar-curso-dialog.component';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {
  cursos: Curso[] = [
    {nombre: 'Angular', comision: '49533', profesor: 'Abner'},
    {nombre: 'Vue', comision: '42523', profesor: 'Lucas'},
    {nombre: 'NodeJS', comision: '42433', profesor: 'Tristan'},
    {nombre: 'React', comision: '49536', profesor: 'Freddy'},
  ];
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.cursos);
  columnas: string[] = ['nombre', 'comision', 'profesor', 'acciones'];

  constructor(
    private dialog: MatDialog
  ){

  }

  abrirModal(curso: Curso){
    const dialogRef = this.dialog.open(EditarCursoDialogComponent, {
      data: curso
    });
  }
}
