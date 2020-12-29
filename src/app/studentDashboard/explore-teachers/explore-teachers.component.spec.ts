import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreTeachersComponent } from './explore-teachers.component';

describe('ExploreTeachersComponent', () => {
  let component: ExploreTeachersComponent;
  let fixture: ComponentFixture<ExploreTeachersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreTeachersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
