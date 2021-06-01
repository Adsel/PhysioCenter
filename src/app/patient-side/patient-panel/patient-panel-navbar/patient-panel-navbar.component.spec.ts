import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPanelNavbarComponent } from './patient-panel-navbar.component';

describe('PatientPanelNavbarComponent', () => {
  let component: PatientPanelNavbarComponent;
  let fixture: ComponentFixture<PatientPanelNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientPanelNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPanelNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
