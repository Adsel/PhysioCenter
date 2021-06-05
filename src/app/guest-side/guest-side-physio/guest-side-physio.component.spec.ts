import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestSidePhysioComponent } from './guest-side-physio.component';

describe('GuestSidePhysioComponent', () => {
  let component: GuestSidePhysioComponent;
  let fixture: ComponentFixture<GuestSidePhysioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestSidePhysioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestSidePhysioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
