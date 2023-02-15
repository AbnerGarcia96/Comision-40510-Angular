import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
