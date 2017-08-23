import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateregistrationComponent } from './validateregistration.component';

describe('ValidateregistrationComponent', () => {
  let component: ValidateregistrationComponent;
  let fixture: ComponentFixture<ValidateregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
