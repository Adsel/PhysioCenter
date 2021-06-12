import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysioPanelPatientCardExercisesComponent } from './physio-panel-patient-card-exercises.component';

describe('PhysioPanelPatientCardExercisesComponent', () => {
  let component: PhysioPanelPatientCardExercisesComponent;
  let fixture: ComponentFixture<PhysioPanelPatientCardExercisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysioPanelPatientCardExercisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysioPanelPatientCardExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
