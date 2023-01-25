import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteHijoComponent } from './componente-hijo.component';

describe('ComponenteHijoComponent', () => {
  let component: ComponenteHijoComponent;
  let fixture: ComponentFixture<ComponenteHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteHijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
