import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSpecificationsComponent } from './dashboard-specifications.component';

describe('DashboardSpecificationsComponent', () => {
  let component: DashboardSpecificationsComponent;
  let fixture: ComponentFixture<DashboardSpecificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSpecificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSpecificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
