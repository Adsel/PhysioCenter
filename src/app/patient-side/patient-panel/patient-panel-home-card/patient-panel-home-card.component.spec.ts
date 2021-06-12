import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPanelHomeCardComponent } from './patient-panel-home-card.component';

describe('PatientPanelHomeCardComponent', () => {
  let component: PatientPanelHomeCardComponent;
  let fixture: ComponentFixture<PatientPanelHomeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientPanelHomeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPanelHomeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
