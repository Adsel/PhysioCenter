import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengerObjectsComponent } from './messenger-objects.component';

describe('MessengerObjectsComponent', () => {
  let component: MessengerObjectsComponent;
  let fixture: ComponentFixture<MessengerObjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessengerObjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengerObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
