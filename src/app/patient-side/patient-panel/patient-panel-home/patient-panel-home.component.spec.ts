import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPanelHomeComponent } from './patient-panel-home.component';

describe('PatientPanelHomeComponent', () => {
  let component: PatientPanelHomeComponent;
  let fixture: ComponentFixture<PatientPanelHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientPanelHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPanelHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
