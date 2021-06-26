import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJefeDptoComponent } from './add-jefe-dpto.component';

describe('AddJefeDptoComponent', () => {
  let component: AddJefeDptoComponent;
  let fixture: ComponentFixture<AddJefeDptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJefeDptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJefeDptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
