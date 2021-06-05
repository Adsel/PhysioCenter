import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysioPanelVisitsComponent } from './physio-panel-visits.component';

describe('PhysioPanelVisitsComponent', () => {
  let component: PhysioPanelVisitsComponent;
  let fixture: ComponentFixture<PhysioPanelVisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysioPanelVisitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysioPanelVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
