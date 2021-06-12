import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysioAuthLoginComponent } from './physio-auth-login.component';

describe('PhysioAuthLoginComponent', () => {
  let component: PhysioAuthLoginComponent;
  let fixture: ComponentFixture<PhysioAuthLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysioAuthLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysioAuthLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
