import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgothelpComponent } from './forgothelp.component';

describe('ForgothelpComponent', () => {
  let component: ForgothelpComponent;
  let fixture: ComponentFixture<ForgothelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgothelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgothelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
