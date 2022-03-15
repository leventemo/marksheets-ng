import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTestDataComponent } from './display-test-data.component';

describe('DisplayTestDataComponent', () => {
  let component: DisplayTestDataComponent;
  let fixture: ComponentFixture<DisplayTestDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayTestDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTestDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
