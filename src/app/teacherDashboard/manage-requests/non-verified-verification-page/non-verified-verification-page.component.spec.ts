import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonVerifiedVerificationPageComponent } from './non-verified-verification-page.component';

describe('NonVerifiedVerificationPageComponent', () => {
  let component: NonVerifiedVerificationPageComponent;
  let fixture: ComponentFixture<NonVerifiedVerificationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonVerifiedVerificationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonVerifiedVerificationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
