import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutionListMapPageComponent } from './tution-list-map-page.component';

describe('TutionListMapPageComponent', () => {
  let component: TutionListMapPageComponent;
  let fixture: ComponentFixture<TutionListMapPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutionListMapPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutionListMapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
