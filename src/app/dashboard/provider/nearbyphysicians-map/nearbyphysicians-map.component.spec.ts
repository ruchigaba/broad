import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearbyphysiciansMapComponent } from './nearbyphysicians-map.component';

describe('NearbyphysiciansMapComponent', () => {
  let component: NearbyphysiciansMapComponent;
  let fixture: ComponentFixture<NearbyphysiciansMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearbyphysiciansMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearbyphysiciansMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
