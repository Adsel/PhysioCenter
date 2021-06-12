import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysioPanelPatientCardComponent } from './physio-panel-patient-card.component';

describe('PhysioPanelPatientCardComponent', () => {
  let component: PhysioPanelPatientCardComponent;
  let fixture: ComponentFixture<PhysioPanelPatientCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysioPanelPatientCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysioPanelPatientCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
