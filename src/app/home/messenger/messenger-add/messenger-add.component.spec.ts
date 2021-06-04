import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengerAddComponent } from './messenger-add.component';

describe('MessengerAddComponent', () => {
  let component: MessengerAddComponent;
  let fixture: ComponentFixture<MessengerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessengerAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
