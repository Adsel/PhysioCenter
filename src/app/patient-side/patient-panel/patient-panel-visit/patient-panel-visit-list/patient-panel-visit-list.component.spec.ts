import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPanelVisitListComponent } from './patient-panel-visit-list.component';

describe('PatientPanelVisitListComponent', () => {
  let component: PatientPanelVisitListComponent;
  let fixture: ComponentFixture<PatientPanelVisitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientPanelVisitListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPanelVisitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
