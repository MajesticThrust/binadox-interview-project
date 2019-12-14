import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedLicencesComponent } from './assigned-licences.component';

describe('AssignedLicencesComponent', () => {
  let component: AssignedLicencesComponent;
  let fixture: ComponentFixture<AssignedLicencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedLicencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedLicencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
