import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPanelVisitCalendarComponent } from './patient-panel-visit-calendar.component';

describe('PatientPanelVisitCalendarComponent', () => {
  let component: PatientPanelVisitCalendarComponent;
  let fixture: ComponentFixture<PatientPanelVisitCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientPanelVisitCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPanelVisitCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
