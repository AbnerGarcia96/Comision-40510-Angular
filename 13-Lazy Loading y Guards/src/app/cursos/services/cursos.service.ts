import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { Curso } from 'src/app/models/curso';

@Injectable()
export class CursosService {
  private cursos: Curso[] = [
    {
      nombre: 'Angular', 
      comision: '49533', 
      profesor: {
        nombre: 'Abner',
        correo: 'abner@gmail.com',
        fechaRegistro: new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2023, 0, 1, 20, 30, 0),
      fechaFin: new Date(2023, 0, 31, 20, 30, 0),
      inscripcionAbierta: true
    },
    {
      nombre: 'Vue', 
      comision: '42523', 
      profesor: {
        nombre: 'Lucas',
        correo: 'lucas@gmail.com',
        fechaRegistro: new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2023, 1, 1, 20, 30, 0),
      fechaFin: new Date(2023, 1, 31, 20, 30, 0),
      inscripcionAbierta: false
    },
    {
      nombre: 'NodeJS', 
      comision: '42433', 
      profesor: {
        nombre: 'Tristan',
        correo: 'tristan@gmail.com',
        fechaRegistro: new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2023, 2, 1, 20, 30, 0),
      fechaFin: new Date(2023, 2, 31, 20, 30, 0),
      inscripcionAbierta: true
    },
    {
      nombre: 'React', 
      comision: '49536', 
      profesor: {
        nombre: 'Freddy',
        correo: 'freddy@gmail.com',
        fechaRegistro: new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2023, 3, 1, 20, 30, 0),
      fechaFin: new Date(2023, 3, 31, 20, 30, 0),
      inscripcionAbierta: false
    }
  ];
  private cursos$: BehaviorSubject<Curso[]>;

  constructor(){
    this.cursos$ = new BehaviorSubject<Curso[]>(this.cursos);
  }

  obtenerCursos(): Observable<Curso[]>{
    return this.cursos$.asObservable();
  }

  agregarCurso(curso: Curso): void{
    this.cursos.push(curso);
    this.cursos$.next(this.cursos);
  }

  editarCurso(curso: Curso): void{
    let indice = this.cursos.findIndex((c: Curso) => c.comision === curso.comision);

    if(indice > -1){
      this.cursos[indice] = curso;
      this.cursos$.next(this.cursos);
    }
  }

  eliminarCurso(curso: Curso): void{
    let indice = this.cursos.findIndex((c: Curso) => c.comision === curso.comision);

    if(indice > -1){
      this.cursos.splice(indice, 1);
      this.cursos$.next(this.cursos);
    }
  }
}
