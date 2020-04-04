import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleBodyDialogEditComponent } from './temple-body-dialog-edit.component';

describe('TempleBodyDialogEditComponent', () => {
  let component: TempleBodyDialogEditComponent;
  let fixture: ComponentFixture<TempleBodyDialogEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempleBodyDialogEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempleBodyDialogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
