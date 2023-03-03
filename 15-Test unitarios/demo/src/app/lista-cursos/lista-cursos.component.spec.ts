import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';

import { ListaCursosComponent } from './lista-cursos.component';

describe('Pruebas unitarias de lsita-cursos-component', () => {
  let component: ListaCursosComponent;
  let fixture: ComponentFixture<ListaCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCursosComponent ],
      imports: [
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente se crea correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('El formulario se mantiene cuando dejamos los campos requeridos vacios', ()=>{
    const formulario = component.formulario;
    const comision = formulario.controls["comision"];

    comision.setValue('45310');

    expect(formulario.valid).toBeFalse();
  });

  it('El formulario cambia a VALID cuando ingresamos el campo nombre', ()=>{
    const formulario = component.formulario;
    const nombre = formulario.controls["nombre"];

    nombre.setValue('Angular');

    expect(nombre.valid).toBeTrue();
  });

  it('La informacion del formulario se agrega al arreglo de cursos', () => {
    const formulario = component.formulario;
    const nombre = formulario.controls["nombre"];
    const comision = formulario.controls["comision"];
    const fechaInicio = formulario.controls["fechaInicio"];
    const fechaFin = formulario.controls["fechaFin"];
    const inscripcionAbierta = formulario.controls["inscripcionAbierta"];
    const profesor = formulario.controls["profesor"];
    const fechaPrueba = new Date();

    nombre.setValue('Angular');
    comision.setValue('76510');
    fechaInicio.setValue(fechaPrueba);
    fechaFin.setValue(fechaPrueba);
    inscripcionAbierta.setValue(true);
    profesor.setValue("Luciano");

    const boton = fixture.debugElement.query(By.css("#btnAgregar"));
    boton.nativeElement.click();

    fixture.detectChanges();

    const cursos = component.cursos;
    console.log(cursos);
    expect(cursos[cursos.length-1]).toEqual({
      id: "1",
      nombre: 'Angular',
      comision: '76510',
      fechaInicio: fechaPrueba,
      fechaFin: fechaPrueba,
      inscripcionAbierta: true,
      profesor: "Luciano"
    });
  });

  it('Los cursos se renderizan correctamente', ()=>{
    const formulario = component.formulario;
    const nombre = formulario.controls["nombre"];
    const comision = formulario.controls["comision"];
    const fechaInicio = formulario.controls["fechaInicio"];
    const fechaFin = formulario.controls["fechaFin"];
    const inscripcionAbierta = formulario.controls["inscripcionAbierta"];
    const profesor = formulario.controls["profesor"];
    const fechaPrueba = new Date();

    nombre.setValue('Angular');
    comision.setValue('76510');
    fechaInicio.setValue(fechaPrueba);
    fechaFin.setValue(fechaPrueba);
    inscripcionAbierta.setValue(true);
    profesor.setValue("Luciano");

    const boton = fixture.debugElement.query(By.css("#btnAgregar"));
    boton.nativeElement.click();

    fixture.detectChanges();

    const listaCursosRef = fixture.debugElement.query(By.css("#lista-cursos"));
    expect(listaCursosRef).toBeTruthy();
  })
});
