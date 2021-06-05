import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestSideNavbarComponent } from './guest-side-navbar.component';

describe('GuestSideNavbarComponent', () => {
  let component: GuestSideNavbarComponent;
  let fixture: ComponentFixture<GuestSideNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestSideNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestSideNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
