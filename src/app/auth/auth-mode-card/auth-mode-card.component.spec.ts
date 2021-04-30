import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthModeCardComponent } from './auth-mode-card.component';

describe('AuthModeCardComponent', () => {
  let component: AuthModeCardComponent;
  let fixture: ComponentFixture<AuthModeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthModeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthModeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
