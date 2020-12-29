import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonVerifiedComponent } from './non-verified.component';

describe('NonVerifiedComponent', () => {
  let component: NonVerifiedComponent;
  let fixture: ComponentFixture<NonVerifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonVerifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonVerifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
