import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Event } from './../../../../models/Event';

@Component({
  selector: 'app-event-body-dialog-delete',
  templateUrl: './event-body-dialog-delete.component.html',
  styleUrls: ['./event-body-dialog-delete.component.css']
})
export class EventBodyDialogDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public event: Event, 
  public dialogRef: MatDialogRef<EventBodyDialogDeleteComponent>) { }

  ngOnInit(): void {
  }

  close(iSdelete: boolean): void {
    this.dialogRef.close(iSdelete);
  }

}