import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreInfoComponent } from './explore-info.component';

describe('ExploreInfoComponent', () => {
  let component: ExploreInfoComponent;
  let fixture: ComponentFixture<ExploreInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
