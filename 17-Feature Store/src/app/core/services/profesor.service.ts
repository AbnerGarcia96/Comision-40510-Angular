import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profesor } from 'src/app/models/profesor';
import { env } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerProfesores(): Observable<Profesor[]>{
    return this.http.get<Profesor[]>(`${env.apiURL}/profesores`)
  }
}
