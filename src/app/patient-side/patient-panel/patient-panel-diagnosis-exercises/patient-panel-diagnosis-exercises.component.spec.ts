import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPanelDiagnosisExercisesComponent } from './patient-panel-diagnosis-exercises.component';

describe('PatientPanelDiagnosisExercisesComponent', () => {
  let component: PatientPanelDiagnosisExercisesComponent;
  let fixture: ComponentFixture<PatientPanelDiagnosisExercisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientPanelDiagnosisExercisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPanelDiagnosisExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
