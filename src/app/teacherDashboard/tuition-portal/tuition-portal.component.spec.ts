import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuitionPortalComponent } from './tuition-portal.component';

describe('TuitionPortalComponent', () => {
  let component: TuitionPortalComponent;
  let fixture: ComponentFixture<TuitionPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuitionPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuitionPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
