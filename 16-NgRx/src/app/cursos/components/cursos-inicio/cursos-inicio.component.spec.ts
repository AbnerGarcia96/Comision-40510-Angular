import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosInicioComponent } from './cursos-inicio.component';

describe('CursosInicioComponent', () => {
  let component: CursosInicioComponent;
  let fixture: ComponentFixture<CursosInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
