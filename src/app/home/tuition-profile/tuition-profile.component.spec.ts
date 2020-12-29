import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuitionProfileComponent } from './tuition-profile.component';

describe('TuitionProfileComponent', () => {
  let component: TuitionProfileComponent;
  let fixture: ComponentFixture<TuitionProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuitionProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuitionProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
