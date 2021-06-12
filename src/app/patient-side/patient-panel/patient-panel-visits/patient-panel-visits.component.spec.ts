import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPanelVisitsComponent } from './patient-panel-visits.component';

describe('PatientPanelVisitsComponent', () => {
  let component: PatientPanelVisitsComponent;
  let fixture: ComponentFixture<PatientPanelVisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientPanelVisitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPanelVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
