import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleBodyDialogDeleteComponent } from './temple-body-dialog-delete.component';

describe('TempleBodyDialogDeleteComponent', () => {
  let component: TempleBodyDialogDeleteComponent;
  let fixture: ComponentFixture<TempleBodyDialogDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempleBodyDialogDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempleBodyDialogDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
