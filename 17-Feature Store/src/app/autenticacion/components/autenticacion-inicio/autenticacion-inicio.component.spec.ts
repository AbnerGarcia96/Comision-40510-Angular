import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutenticacionInicioComponent } from './autenticacion-inicio.component';

describe('AutenticacionInicioComponent', () => {
  let component: AutenticacionInicioComponent;
  let fixture: ComponentFixture<AutenticacionInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutenticacionInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutenticacionInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
