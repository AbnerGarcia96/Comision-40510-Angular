import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEstudianteComponent } from './login-estudiante.component';

describe('LoginEstudianteComponent', () => {
  let component: LoginEstudianteComponent;
  let fixture: ComponentFixture<LoginEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginEstudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
