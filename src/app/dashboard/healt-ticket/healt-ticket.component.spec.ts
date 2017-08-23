import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealtTicketComponent } from './healt-ticket.component';

describe('HealtTicketComponent', () => {
  let component: HealtTicketComponent;
  let fixture: ComponentFixture<HealtTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealtTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealtTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
