import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBodyDialogDeleteComponent } from './event-body-dialog-delete.component';

describe('EventBodyDialogDeleteComponent', () => {
  let component: EventBodyDialogDeleteComponent;
  let fixture: ComponentFixture<EventBodyDialogDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBodyDialogDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBodyDialogDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
