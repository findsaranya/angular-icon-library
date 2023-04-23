import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTtIconsComponent } from './ng-tt-icons.component';

describe('NgTtIconsComponent', () => {
  let component: NgTtIconsComponent;
  let fixture: ComponentFixture<NgTtIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgTtIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTtIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
