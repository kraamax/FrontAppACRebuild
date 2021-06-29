import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddAccionRealizadaComponent } from './dialog-add-accion-realizada.component';

describe('DialogAddAccionRealizadaComponent', () => {
  let component: DialogAddAccionRealizadaComponent;
  let fixture: ComponentFixture<DialogAddAccionRealizadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddAccionRealizadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddAccionRealizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
