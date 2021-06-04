import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengerChooseContactComponent } from './messenger-choose-contact.component';

describe('MessengerChooseContactComponent', () => {
  let component: MessengerChooseContactComponent;
  let fixture: ComponentFixture<MessengerChooseContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessengerChooseContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengerChooseContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
