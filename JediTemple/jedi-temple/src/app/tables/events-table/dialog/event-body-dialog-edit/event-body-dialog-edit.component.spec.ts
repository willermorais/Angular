import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBodyDialogEditComponent } from './event-body-dialog-edit.component';

describe('EventBodyDialogEditComponent', () => {
  let component: EventBodyDialogEditComponent;
  let fixture: ComponentFixture<EventBodyDialogEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBodyDialogEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBodyDialogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
