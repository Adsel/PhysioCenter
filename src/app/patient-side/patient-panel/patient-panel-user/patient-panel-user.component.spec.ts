import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPanelUserComponent } from './patient-panel-user.component';

describe('PatientPanelUserComponent', () => {
  let component: PatientPanelUserComponent;
  let fixture: ComponentFixture<PatientPanelUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientPanelUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPanelUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
