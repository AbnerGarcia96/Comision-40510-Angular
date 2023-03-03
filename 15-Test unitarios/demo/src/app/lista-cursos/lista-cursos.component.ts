import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Curso } from '../models/curso';
import { Profesor } from '../models/profesor';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit{
  formulario!: FormGroup;
  cursos: Curso[] = [];
  profesores: Profesor[] = [
    {
     "nombre": "Alfonso Smith",
     "correo": "Abagail_Roberts@gmail.com",
     "id": "1"
    },
    {
     "nombre": "Lonnie Cruickshank",
     "correo": "Owen1@gmail.com",
     "id": "2"
    },
    {
     "nombre": "Delores Wilderman",
     "correo": "Aleen16@gmail.com",
     "id": "3"
    },
    {
     "nombre": "Lori Lebsack",
     "correo": "Camila44@gmail.com",
     "id": "4"
    },
    {
     "nombre": "Leonard Reilly MD",
     "correo": "Gabe.Conn@gmail.com",
     "id": "5"
    }
   ]

  ngOnInit(){
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      comision: new FormControl(),
      fechaInicio: new FormControl(),
      fechaFin: new FormControl(),
      inscripcionAbierta: new FormControl(false),
      profesor: new FormControl()
    })
  }

  agregarCurso(){
    console.log(this.formulario.value);
    let curso: Curso = {
      id: '1',
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      profesor: this.formulario.value.profesor,
    }
    this.cursos.push(curso);
  }
}
