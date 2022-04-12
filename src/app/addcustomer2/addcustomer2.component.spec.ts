import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addcustomer2Component } from './addcustomer2.component';

describe('Addcustomer2Component', () => {
  let component: Addcustomer2Component;
  let fixture: ComponentFixture<Addcustomer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Addcustomer2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Addcustomer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
