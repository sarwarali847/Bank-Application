import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCustomer2Component } from './update-customer2.component';

describe('UpdateCustomer2Component', () => {
  let component: UpdateCustomer2Component;
  let fixture: ComponentFixture<UpdateCustomer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCustomer2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCustomer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
