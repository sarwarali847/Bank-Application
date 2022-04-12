import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortbynameComponent } from './sortbyname.component';

describe('SortbynameComponent', () => {
  let component: SortbynameComponent;
  let fixture: ComponentFixture<SortbynameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortbynameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortbynameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
