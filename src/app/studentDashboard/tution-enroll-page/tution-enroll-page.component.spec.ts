import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutionEnrollPageComponent } from './tution-enroll-page.component';

describe('TutionEnrollPageComponent', () => {
  let component: TutionEnrollPageComponent;
  let fixture: ComponentFixture<TutionEnrollPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutionEnrollPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutionEnrollPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
