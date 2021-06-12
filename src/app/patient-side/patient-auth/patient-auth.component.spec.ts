import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAuthComponent } from './patient-auth.component';

describe('PatientAuthComponent', () => {
  let component: PatientAuthComponent;
  let fixture: ComponentFixture<PatientAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
