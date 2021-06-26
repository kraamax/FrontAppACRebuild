import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlazoComponent } from './add-plazo.component';

describe('AddPlazoComponent', () => {
  let component: AddPlazoComponent;
  let fixture: ComponentFixture<AddPlazoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlazoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
