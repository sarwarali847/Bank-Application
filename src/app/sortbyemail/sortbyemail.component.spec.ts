import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortbyemailComponent } from './sortbyemail.component';

describe('SortbyemailComponent', () => {
  let component: SortbyemailComponent;
  let fixture: ComponentFixture<SortbyemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortbyemailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortbyemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
