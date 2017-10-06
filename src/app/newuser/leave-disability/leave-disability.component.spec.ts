import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveDisabilityComponent } from './leave-disability.component';

describe('LeaveDisabilityComponent', () => {
  let component: LeaveDisabilityComponent;
  let fixture: ComponentFixture<LeaveDisabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveDisabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveDisabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
