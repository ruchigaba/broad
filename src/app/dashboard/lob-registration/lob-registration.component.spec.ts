import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LOBRegistrationComponent } from './lob-registration.component';

describe('LOBRegistrationComponent', () => {
  let component: LOBRegistrationComponent;
  let fixture: ComponentFixture<LOBRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LOBRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LOBRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
