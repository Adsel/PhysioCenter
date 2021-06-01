import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPanelPhysioComponent } from './patient-panel-physio.component';

describe('PatientPanelPhysioComponent', () => {
  let component: PatientPanelPhysioComponent;
  let fixture: ComponentFixture<PatientPanelPhysioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientPanelPhysioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPanelPhysioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
