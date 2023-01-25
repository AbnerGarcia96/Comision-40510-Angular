import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteHijoComponent } from './components/componente-hijo/componente-hijo.component';
import { ComponentePadreComponent } from './components/componente-padre/componente-padre.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteHijoComponent,
    ComponentePadreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
