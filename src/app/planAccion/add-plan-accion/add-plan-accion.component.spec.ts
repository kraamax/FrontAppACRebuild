import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlanAccionComponent } from './add-plan-accion.component';

describe('AddPlanAccionComponent', () => {
  let component: AddPlanAccionComponent;
  let fixture: ComponentFixture<AddPlanAccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlanAccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlanAccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
