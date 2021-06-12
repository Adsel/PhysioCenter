import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysioPanelCalendarComponent } from './physio-panel-calendar.component';

describe('PhysioPanelCalendarComponent', () => {
  let component: PhysioPanelCalendarComponent;
  let fixture: ComponentFixture<PhysioPanelCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysioPanelCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysioPanelCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
