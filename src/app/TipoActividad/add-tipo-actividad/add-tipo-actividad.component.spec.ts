import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTipoActividadComponent } from './add-tipo-actividad.component';

describe('AddTipoActividadComponent', () => {
  let component: AddTipoActividadComponent;
  let fixture: ComponentFixture<AddTipoActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTipoActividadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTipoActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
