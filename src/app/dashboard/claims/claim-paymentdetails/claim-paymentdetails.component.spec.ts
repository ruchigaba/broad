import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimPaymentdetailsComponent } from './claim-paymentdetails.component';

describe('ClaimPaymentdetailsComponent', () => {
  let component: ClaimPaymentdetailsComponent;
  let fixture: ComponentFixture<ClaimPaymentdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimPaymentdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimPaymentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
