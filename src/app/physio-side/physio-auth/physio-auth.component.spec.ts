import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysioAuthComponent } from './physio-auth.component';

describe('PhysioAuthComponent', () => {
  let component: PhysioAuthComponent;
  let fixture: ComponentFixture<PhysioAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysioAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysioAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
