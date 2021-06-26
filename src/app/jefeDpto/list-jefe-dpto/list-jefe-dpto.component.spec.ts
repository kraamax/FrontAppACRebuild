import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJefeDptoComponent } from './list-jefe-dpto.component';

describe('ListJefeDptoComponent', () => {
  let component: ListJefeDptoComponent;
  let fixture: ComponentFixture<ListJefeDptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListJefeDptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJefeDptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
