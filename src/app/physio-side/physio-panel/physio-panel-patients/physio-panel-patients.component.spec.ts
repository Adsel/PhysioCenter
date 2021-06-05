import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysioPanelPatientsComponent } from './physio-panel-patients.component';

describe('PhysioPanelPatientsComponent', () => {
  let component: PhysioPanelPatientsComponent;
  let fixture: ComponentFixture<PhysioPanelPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysioPanelPatientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysioPanelPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
