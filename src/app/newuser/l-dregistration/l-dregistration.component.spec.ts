import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LDRegistrationComponent } from './l-dregistration.component';

describe('LDRegistrationComponent', () => {
  let component: LDRegistrationComponent;
  let fixture: ComponentFixture<LDRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LDRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LDRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
