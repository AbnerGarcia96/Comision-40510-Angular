import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';

// localhost:4200/login -> login.component
// localhost:4200/inicio -> inicio.component
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: InicioComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: '**', component: PaginaNoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
