import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortbydobComponent } from './sortbydob.component';

describe('SortbydobComponent', () => {
  let component: SortbydobComponent;
  let fixture: ComponentFixture<SortbydobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortbydobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortbydobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
