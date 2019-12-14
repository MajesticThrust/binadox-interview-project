import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignedLicencesComponent } from './unassigned-licences.component';

describe('UnassignedLicencesComponent', () => {
  let component: UnassignedLicencesComponent;
  let fixture: ComponentFixture<UnassignedLicencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnassignedLicencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnassignedLicencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
