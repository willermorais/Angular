import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatDialogRef } from '@angular/material/dialog';

import { Temple } from '../../../../models/Temple';

@Component({
  selector: 'app-temple-body-dialog-delete',
  templateUrl: './temple-body-dialog-delete.component.html',
  styleUrls: ['./temple-body-dialog-delete.component.css']
})
export class TempleBodyDialogDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public temple: Temple, 
  public dialogRef: MatDialogRef<TempleBodyDialogDeleteComponent>) { }

  ngOnInit(): void {
  }

  close(iSdelete: boolean): void {
    this.dialogRef.close(iSdelete);
  }
}
