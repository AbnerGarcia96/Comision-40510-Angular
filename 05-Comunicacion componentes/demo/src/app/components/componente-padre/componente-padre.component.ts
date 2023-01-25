import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';
import { ComponenteHijoComponent } from '../componente-hijo/componente-hijo.component';

@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.css']
})
export class ComponentePadreComponent implements AfterViewInit, OnInit {
  @Input() estudiantesPadre!: Estudiante[];
  @Output() eventoSalidaPadre: EventEmitter<Estudiante> = new EventEmitter<Estudiante>();
  @ViewChild('mensaje') mensajePruebaRef!: ElementRef;
  @ViewChild(ComponenteHijoComponent) hijoComponent!: ComponenteHijoComponent;

  constructor(){
    console.log('Ejecutado desde el constructor', this.mensajePruebaRef, this.hijoComponent);
  }

  ngOnInit(): void {
    console.log('Ejecutado desde el ngOnInit', this.mensajePruebaRef, this.hijoComponent);
  }

  ngAfterViewInit(): void {
    this.mensajePruebaRef.nativeElement.textContent = 'Texto cambiado';

    console.log('Ejecutado desde el ngAfterViewInit', this.mensajePruebaRef.nativeElement, this.hijoComponent);
  }

  actualizarEstudiantesPadre(estudiante: Estudiante){
    console.log("Estoy agregando un usuario desde app-componente-padre", estudiante);
    this.eventoSalidaPadre.emit(estudiante);
  }
}
