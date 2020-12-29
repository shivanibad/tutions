import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnPortalComponent } from './learn-portal.component';

describe('LearnPortalComponent', () => {
  let component: LearnPortalComponent;
  let fixture: ComponentFixture<LearnPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
