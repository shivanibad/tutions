import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksPortalComponent } from './books-portal.component';

describe('BooksPortalComponent', () => {
  let component: BooksPortalComponent;
  let fixture: ComponentFixture<BooksPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
