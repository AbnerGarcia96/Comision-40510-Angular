import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCursoDialogComponent } from './editar-curso-dialog.component';

describe('EditarCursoDialogComponent', () => {
  let component: EditarCursoDialogComponent;
  let fixture: ComponentFixture<EditarCursoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCursoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarCursoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
