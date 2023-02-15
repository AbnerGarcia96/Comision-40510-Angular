import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarCursoComponent } from './compoents/agregar-curso/agregar-curso.component';
import { DetalleCursoComponent } from './components/detalle-curso/detalle-curso.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { TablaCursosComponent } from './components/tabla-cursos/tabla-cursos.component';

const routes: Routes = [
  {path: 'cursos', children: [
    {path: 'cards', component: ListaCursosComponent},
    {path: 'tabla', component: TablaCursosComponent},
    {path: 'agregar', component: AgregarCursoComponent}
  ]},
  {path: 'curso/:id', component: DetalleCursoComponent},
  {path: 'inicio', component: InicioComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: '**', component: NoEncontradoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRountingModule { }
