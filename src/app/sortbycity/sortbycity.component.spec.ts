import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortbycityComponent } from './sortbycity.component';

describe('SortbycityComponent', () => {
  let component: SortbycityComponent;
  let fixture: ComponentFixture<SortbycityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortbycityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortbycityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
