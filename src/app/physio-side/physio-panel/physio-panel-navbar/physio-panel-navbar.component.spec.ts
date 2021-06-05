import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysioPanelNavbarComponent } from './physio-panel-navbar.component';

describe('PhysioPanelNavbarComponent', () => {
  let component: PhysioPanelNavbarComponent;
  let fixture: ComponentFixture<PhysioPanelNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysioPanelNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysioPanelNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
