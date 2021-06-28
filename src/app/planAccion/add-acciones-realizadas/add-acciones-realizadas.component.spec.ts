import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccionesRealizadasComponent } from './add-acciones-realizadas.component';

describe('AddAccionesRealizadasComponent', () => {
  let component: AddAccionesRealizadasComponent;
  let fixture: ComponentFixture<AddAccionesRealizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAccionesRealizadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccionesRealizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
