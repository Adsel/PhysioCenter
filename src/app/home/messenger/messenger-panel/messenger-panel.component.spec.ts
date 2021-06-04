import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengerPanelComponent } from './messenger-panel.component';

describe('MessengerPanelComponent', () => {
  let component: MessengerPanelComponent;
  let fixture: ComponentFixture<MessengerPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessengerPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
