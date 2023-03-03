import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CursosService } from './cursos.service';
import { of } from 'rxjs';
import { Curso } from '../models/curso';

describe('CursosService', () => {
  let service: CursosService;
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new CursosService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("el servicio retorna un arreglo de datos mockeados", (done: DoneFn)=>{
    let fechaPrueba = new Date()
    const mockDatos: Curso[] = [
      {
       "nombre": "Angular Basico",
       "comision": "32610",
       "fechaInicio": fechaPrueba,
       "fechaFin": fechaPrueba,
       "inscripcionAbierta": true,
       "profesor": "Abner",
       "id": "1"
      },
      {
       "nombre": "VueJS",
       "comision": "75747",
       "fechaInicio": fechaPrueba,
       "fechaFin": fechaPrueba,
       "inscripcionAbierta": true,
       "profesor": "Abner",
       "id": "3"
      }
     ];

     httpClientSpy.get.and.returnValue(of(mockDatos));

     service.obtenerCursos().subscribe((cursos: Curso[]) => {
       expect(cursos).toEqual(mockDatos);
       done();
     });
  })
});
