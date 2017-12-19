import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueAccessComponent } from './unique-access.component';

describe('UniqueAccessComponent', () => {
  let component: UniqueAccessComponent;
  let fixture: ComponentFixture<UniqueAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniqueAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
