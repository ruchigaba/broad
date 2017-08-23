import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAdjusterComponent } from './contact-adjuster.component';

describe('ContactAdjusterComponent', () => {
  let component: ContactAdjusterComponent;
  let fixture: ComponentFixture<ContactAdjusterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactAdjusterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactAdjusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
