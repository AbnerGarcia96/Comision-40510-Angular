import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SesionService } from './core/services/sesion.service';
import { AppState } from './core/state/app.state';
import { cargarCursos, cursosCargados } from './core/state/cursos.actions';
import { Curso } from './models/curso';
import { Sesion } from './models/sesion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo';
  sesion$!: Observable<Sesion>;

  constructor(
    private router: Router,
    private sesion: SesionService,
    private store: Store<AppState>,
  ){} 

  ngOnInit(): void {
    this.sesion$ = this.sesion.obtenerSesion();
  }

  redigirInicio(){
    this.router.navigate(['inicio']);
  }

  logout(){
    let sesionLogout: Sesion = {
      sesionActiva: false,
      usuarioActivo: undefined
    }
    this.sesion.logout(sesionLogout);
    this.router.navigate(['auth/login']);
  }
}
