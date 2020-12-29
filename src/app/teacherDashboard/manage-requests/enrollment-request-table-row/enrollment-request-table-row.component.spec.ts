import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentRequestTableRowComponent } from './enrollment-request-table-row.component';

describe('EnrollmentRequestTableRowComponent', () => {
  let component: EnrollmentRequestTableRowComponent;
  let fixture: ComponentFixture<EnrollmentRequestTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollmentRequestTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentRequestTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
