import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTempleComponent } from './dashboard-temple.component';

describe('DashboardTempleComponent', () => {
  let component: DashboardTempleComponent;
  let fixture: ComponentFixture<DashboardTempleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTempleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
