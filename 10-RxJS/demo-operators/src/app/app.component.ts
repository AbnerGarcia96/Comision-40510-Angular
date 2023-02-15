import { Component } from '@angular/core';
import { filter, from, interval, map, mergeMap, of } from 'rxjs';
import { Curso } from './models/curso';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cursos: Curso[] = [{
    nombre: 'Angular',
    comision: '32310',
    profesor: 'Abner',
    fechaInicio: new Date(),
    fechaFin: new Date()
  },{
    nombre: 'ReactJS',
    comision: '32320',
    profesor: 'Jesica',
    fechaInicio: new Date(),
    fechaFin: new Date()
  },{
    nombre: 'Kotlin',
    comision: '32330',
    profesor: 'Jesica',
    fechaInicio: new Date(),
    fechaFin: new Date()
  }];
  
  constructor(){
    of(this.cursos).pipe(
      map((cursos: Curso[]) => {
        return cursos.filter((curso: Curso) => curso.profesor == 'Jesica')
      })
    ).subscribe((cursos)=>{
      console.log("Obtenido desde el OF, filtrado por nombre", cursos);
    });

    of(this.cursos).pipe(
      mergeMap((cursos: Curso[]) => {
        return interval(5000).pipe(map((i => {
          return {
            nombre: `${cursos[i].nombre} - ${i}`,
            comision: cursos[i].comision,
            profesor: cursos[i].profesor

          }
        })));
      })
    ).subscribe((datos) => console.log('Utilizando mergeMap', datos));


    // from(this.cursos).pipe(
    //   filter((curso: Curso) => curso.profesor === 'Jesica')
    // ).subscribe((curso: Curso) => console.log(curso))
  }
}
