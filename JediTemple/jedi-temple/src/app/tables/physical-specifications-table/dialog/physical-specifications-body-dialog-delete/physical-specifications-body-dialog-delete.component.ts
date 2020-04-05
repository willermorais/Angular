import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PhysicalSpecification } from './../../../../models/PhysicalSpecification';

@Component({
  selector: 'app-physical-specifications-body-dialog-delete',
  templateUrl: './physical-specifications-body-dialog-delete.component.html',
  styleUrls: ['./physical-specifications-body-dialog-delete.component.css']
})
export class PhysicalSpecificationsBodyDialogDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public specification: PhysicalSpecification, 
  public dialogRef: MatDialogRef<PhysicalSpecificationsBodyDialogDeleteComponent>) { }
  
  ngOnInit(): void {
  }
  
  close(iSdelete: boolean): void {
    this.dialogRef.close(iSdelete);
  }

}



