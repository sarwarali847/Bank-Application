import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutCustomerComponent } from './logout-customer.component';

describe('LogoutCustomerComponent', () => {
  let component: LogoutCustomerComponent;
  let fixture: ComponentFixture<LogoutCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
