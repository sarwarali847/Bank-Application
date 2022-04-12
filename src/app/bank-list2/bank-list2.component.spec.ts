import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankList2Component } from './bank-list2.component';

describe('BankList2Component', () => {
  let component: BankList2Component;
  let fixture: ComponentFixture<BankList2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankList2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
