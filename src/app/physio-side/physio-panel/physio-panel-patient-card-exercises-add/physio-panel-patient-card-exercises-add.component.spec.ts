import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysioPanelPatientCardExercisesAddComponent } from './physio-panel-patient-card-exercises-add.component';

describe('PhysioPanelPatientCardExercisesAddComponent', () => {
  let component: PhysioPanelPatientCardExercisesAddComponent;
  let fixture: ComponentFixture<PhysioPanelPatientCardExercisesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysioPanelPatientCardExercisesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysioPanelPatientCardExercisesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
