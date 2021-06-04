import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPanelVisitPhysioComponent } from './patient-panel-visit-physio.component';

describe('PatientPanelVisitPhysioComponent', () => {
  let component: PatientPanelVisitPhysioComponent;
  let fixture: ComponentFixture<PatientPanelVisitPhysioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientPanelVisitPhysioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPanelVisitPhysioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
