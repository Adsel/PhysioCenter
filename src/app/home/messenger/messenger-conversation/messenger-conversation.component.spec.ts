import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengerConversationComponent } from './messenger-conversation.component';

describe('MessengerConversationComponent', () => {
  let component: MessengerConversationComponent;
  let fixture: ComponentFixture<MessengerConversationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessengerConversationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengerConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
