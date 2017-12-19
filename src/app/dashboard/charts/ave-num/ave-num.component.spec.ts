import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AveNumComponent } from './ave-num.component';

describe('AveNumComponent', () => {
  let component: AveNumComponent;
  let fixture: ComponentFixture<AveNumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AveNumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AveNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
