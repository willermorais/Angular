import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalSpecificationsBodyDialogEditComponent } from './physical-specifications-body-dialog-edit.component';

describe('PhysicalSpecificationsBodyDialogEditComponent', () => {
  let component: PhysicalSpecificationsBodyDialogEditComponent;
  let fixture: ComponentFixture<PhysicalSpecificationsBodyDialogEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalSpecificationsBodyDialogEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalSpecificationsBodyDialogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
