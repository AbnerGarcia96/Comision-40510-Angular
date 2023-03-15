import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { NoEncontradoComponent } from './core/components/no-encontrado/no-encontrado.component';
import { SesionGuard } from './core/guards/sesion.guard';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent, canActivate: [SesionGuard]},
  {
    path: 'cursos', 
    loadChildren: () => import('./cursos/cursos.module').then((modulo) => modulo.CursosModule),
    canLoad: [SesionGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./autenticacion/autenticacion.module').then((modulo) => modulo.AutenticacionModule)
  },
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: '**', component: NoEncontradoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRountingModule { }
