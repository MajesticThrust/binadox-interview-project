import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUtilizationComponent } from './app-utilization.component';

describe('AppUtilizationComponent', () => {
  let component: AppUtilizationComponent;
  let fixture: ComponentFixture<AppUtilizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppUtilizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppUtilizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
