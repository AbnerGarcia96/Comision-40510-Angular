import { Component, OnInit } from '@angular/core';
import { Curso } from './models/curso';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  nombre: string = '';
  contrasena: string = '';
  admin: boolean = false;
  
  agregarUsuario(id: number): string {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    console.log('Hola');
  }
}
