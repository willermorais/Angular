import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalSpecificationsBodyDialogDeleteComponent } from './physical-specifications-body-dialog-delete.component';

describe('PhysicalSpecificationsBodyDialogDeleteComponent', () => {
  let component: PhysicalSpecificationsBodyDialogDeleteComponent;
  let fixture: ComponentFixture<PhysicalSpecificationsBodyDialogDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalSpecificationsBodyDialogDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalSpecificationsBodyDialogDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
