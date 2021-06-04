import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengerDirectComponent } from './messenger-direct.component';

describe('MessengerDirectComponent', () => {
  let component: MessengerDirectComponent;
  let fixture: ComponentFixture<MessengerDirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessengerDirectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengerDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
