import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationTutorialComponent } from './registration-tutorial.component';

describe('RegistrationTutorialComponent', () => {
  let component: RegistrationTutorialComponent;
  let fixture: ComponentFixture<RegistrationTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
