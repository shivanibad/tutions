import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperUserPortalComponent } from './super-user-portal.component';

describe('SuperUserPortalComponent', () => {
  let component: SuperUserPortalComponent;
  let fixture: ComponentFixture<SuperUserPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperUserPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperUserPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
