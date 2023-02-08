import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCursosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
