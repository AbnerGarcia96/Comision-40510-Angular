import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePadreComponent } from './componente-padre.component';

describe('ComponentePadreComponent', () => {
  let component: ComponentePadreComponent;
  let fixture: ComponentFixture<ComponentePadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentePadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentePadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
