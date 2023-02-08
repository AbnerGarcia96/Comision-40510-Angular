import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { CursoService } from './services/curso.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TablaCursosComponent } from './components/tabla-cursos/tabla-cursos.component';
import { CursoAlphaService } from './services/curso-alpha.service';
import { cursos } from './services/cursos.data';
import { env } from 'src/environment/environment';

@NgModule({
  declarations: [
    AppComponent,
    ListaCursosComponent,
    TablaCursosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    // CursoService,
    // {provide: CursoService, useExisting: CursoAlphaService}
    // {provide: CursoService, useClass: CursoAlphaService}
    // {provide: CursoService, useValue: cursos}
    {provide: CursoService, useFactory: ()=>{
      if(env.utilizarServicioAlpha == 'Alpha'){
        return new CursoAlphaService()
      }else if(env.utilizarServicioAlpha == 'Legacy'){
        return cursos
      }else{
        return new CursoService()
      }
    }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
