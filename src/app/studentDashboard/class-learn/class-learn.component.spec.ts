import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassLearnComponent } from './class-learn.component';

describe('ClassLearnComponent', () => {
  let component: ClassLearnComponent;
  let fixture: ComponentFixture<ClassLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
