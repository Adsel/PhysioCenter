import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAuthLoginComponent } from './patient-auth-login.component';

describe('PatientAuthLoginComponent', () => {
  let component: PatientAuthLoginComponent;
  let fixture: ComponentFixture<PatientAuthLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientAuthLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAuthLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
