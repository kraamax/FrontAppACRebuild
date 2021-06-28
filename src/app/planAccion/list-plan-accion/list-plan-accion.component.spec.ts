import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlanAccionComponent } from './list-plan-accion.component';

describe('ListPlanAccionComponent', () => {
  let component: ListPlanAccionComponent;
  let fixture: ComponentFixture<ListPlanAccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPlanAccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlanAccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
