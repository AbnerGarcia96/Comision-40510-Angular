import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, Subscriber, throwError } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { env } from 'src/environment/environment';

@Injectable()
export class CursosService {
  constructor(
    private http: HttpClient
  ){
    
  }

  obtenerCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${env.apiURL}/cursos`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.capturarError)
    );
  }

  agregarCurso(curso: Curso): Observable<Curso>{
    return this.http.post<Curso>(`${env.apiURL}/cursos`, curso, {
      headers: new HttpHeaders({
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.capturarError)
    );
  }

  editarCurso(curso: Curso): Observable<Curso>{
    return this.http.put<Curso>(`${env.apiURL}/cursos/${curso.id}`, curso, {
      headers: new HttpHeaders({
        'usuario': 'Abner'
      })
    }).pipe(
      catchError(this.capturarError)
    );
  }

  eliminarCurso(curso: Curso): Observable<Curso>{
    return this.http.delete<Curso>(`${env.apiURL}/cursos/${curso.id}`, {
      headers: new HttpHeaders({
        'curso': 'Angular'
      })
    }).pipe(
      catchError(this.capturarError)
    );
  }

  private capturarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      alert(`Hubo un error del lado del cliente: ${error.message}`);
    }else{
      alert(`Hubo un error del lado del servidor: ${error.message}`);
    }

    return throwError(() => new Error('Error en el procesamiento de cursos'));
  }
}
