import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdmin2Component } from './add-admin2.component';

describe('AddAdmin2Component', () => {
  let component: AddAdmin2Component;
  let fixture: ComponentFixture<AddAdmin2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdmin2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdmin2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
