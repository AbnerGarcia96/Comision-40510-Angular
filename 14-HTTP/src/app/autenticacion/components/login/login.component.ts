import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario!: FormGroup;
  
  constructor(
    private loginService: LoginService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      usuario: new FormControl(),
      contrasena: new FormControl(),
      esAdmin: new FormControl(false)
    });
  }

  login(){
    let usuario: Usuario = {
      usuario: this.formulario.value.usuario,
      contrasena: this.formulario.value.contrasena,
      esAdmin: this.formulario.value.esAdmin
    }
    this.loginService.login(usuario);
    this.router.navigate(['inicio']);
  }
}
