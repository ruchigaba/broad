import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateForgotpassComponent } from './validate-forgotpass.component';

describe('ValidateForgotpassComponent', () => {
  let component: ValidateForgotpassComponent;
  let fixture: ComponentFixture<ValidateForgotpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateForgotpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateForgotpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
