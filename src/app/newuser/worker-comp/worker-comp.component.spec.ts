import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerCompComponent } from './worker-comp.component';

describe('WorkerCompComponent', () => {
  let component: WorkerCompComponent;
  let fixture: ComponentFixture<WorkerCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
