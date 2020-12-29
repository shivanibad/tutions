import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDevComponent } from './about-dev.component';

describe('AboutDevComponent', () => {
  let component: AboutDevComponent;
  let fixture: ComponentFixture<AboutDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
