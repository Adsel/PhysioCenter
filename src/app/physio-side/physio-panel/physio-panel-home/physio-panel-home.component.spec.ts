import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysioPanelHomeComponent } from './physio-panel-home.component';

describe('PhysioPanelHomeComponent', () => {
  let component: PhysioPanelHomeComponent;
  let fixture: ComponentFixture<PhysioPanelHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysioPanelHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysioPanelHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
