import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysioPanelPatientCardDiagnosisComponent } from './physio-panel-patient-card-diagnosis.component';

describe('PhysioPanelPatientCardDiagnosisComponent', () => {
  let component: PhysioPanelPatientCardDiagnosisComponent;
  let fixture: ComponentFixture<PhysioPanelPatientCardDiagnosisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysioPanelPatientCardDiagnosisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysioPanelPatientCardDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
