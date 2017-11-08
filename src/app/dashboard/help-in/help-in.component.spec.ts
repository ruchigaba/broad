import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpInComponent } from './help-in.component';

describe('HelpInComponent', () => {
  let component: HelpInComponent;
  let fixture: ComponentFixture<HelpInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
