import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  constructor(
    private dialogRef: MatDialog
  ){

  }

  abrirDialog(){
    this.dialogRef.open(DialogComponent, {
      data: 'Hola, este mensaje lo mande desde el app component'
    })
  }
}
