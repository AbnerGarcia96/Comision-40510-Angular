import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCursosComponent } from './tabla-cursos.component';

describe('TablaCursosComponent', () => {
  let component: TablaCursosComponent;
  let fixture: ComponentFixture<TablaCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaCursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
