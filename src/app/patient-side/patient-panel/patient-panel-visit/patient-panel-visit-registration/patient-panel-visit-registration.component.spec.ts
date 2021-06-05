import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPanelVisitRegistrationComponent } from './patient-panel-visit-registration.component';

describe('PatientPanelVisitRegistrationComponent', () => {
  let component: PatientPanelVisitRegistrationComponent;
  let fixture: ComponentFixture<PatientPanelVisitRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientPanelVisitRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPanelVisitRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
