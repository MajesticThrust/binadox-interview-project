import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLogButtonComponent } from './event-log-button.component';

describe('EventLogButtonComponent', () => {
  let component: EventLogButtonComponent;
  let fixture: ComponentFixture<EventLogButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventLogButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventLogButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
