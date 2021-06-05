import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysioPanelVisitsListComponent } from './physio-panel-visits-list.component';

describe('PhysioPanelVisitsListComponent', () => {
  let component: PhysioPanelVisitsListComponent;
  let fixture: ComponentFixture<PhysioPanelVisitsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysioPanelVisitsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysioPanelVisitsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
